import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { PrismaService } from '../prisma.service';
import { CreateTournamentApplicationDto } from './dto/create-tournament-application.dto';
import { GroupService, groupCalculate } from 'src/group/group.service';
import { MatchService } from 'src/match/match.service';

@Injectable()
export class TournamentService {
  constructor(
    private prisma: PrismaService,
    private groupService: GroupService,
    private matchService: MatchService,
  ) {}

  async create(createTournamentDto: CreateTournamentDto) {
    const tour = await this.prisma.tournament.create({
      data: createTournamentDto,
    });

    return { message: `Турнир ${tour.name}  создан` };
  }

  async findList(query: { current: number; pageSize: number }) {
    const { pageSize = 10, current = 1 } = query;

    const pageNumber = Math.max(1, current);
    const skip = (pageNumber - 1) * pageSize;
    const take = +pageSize;

    const results = await this.prisma.tournament.findMany({
      take,
      skip,
    });

    const totalCount = await this.prisma.tournament.count();

    return {
      data: results,
      page: pageNumber,
      pageSize: pageSize,
      total: totalCount,
    };
  }

  findAll() {
    return this.prisma.tournament.findMany();
  }

  async getDictionary() {
    const list = await this.prisma.tournament.findMany({
      where: {
        status: {
          not: 'NotStarted',
        },
      },
      select: {
        id: true,
        name: true,
        tournamentType: true,
      },
    });
    return list.map((el) => ({
      label: el.name,
      value: el.id,
      type: el.tournamentType,
    }));
  }

  async findOne(id: string) {
    const tournament = await this.prisma.tournament.findUnique({
      where: { id },
      include: {
        teamIds: true,
      },
    });

    return {
      ...tournament,
      teamIds: tournament.teamIds.flatMap((el) => el.id),
    };
  }

  update(id: string, updateTournamentDto: UpdateTournamentDto) {
    return this.prisma.tournament.update({
      where: {
        id,
      },
      data: {
        ...updateTournamentDto,
        teamIds: {
          set: updateTournamentDto.teamIds?.map((team) => ({
            id: team,
          })),
        },
      },
    });
  }

  async getTable(id: string) {
    const tournament = await this.prisma.tournament.findUnique({
      where: { id },
      select: {
        groups: {
          select: {
            match: {
              where: {
                status: { notIn: ['NotStarted', 'Suspended', 'Preparation'] },
              },
              include: {
                matchTimeline: {
                  where: {
                    type: 'GOAL',
                  },
                },
                teams: true,
              },
            },
            teamIds: true,
          },
        },
        teamIds: true,
        tournamentType: true,
      },
    });
    if (tournament.tournamentType === 'LEAGUE') {
      const matches = tournament.groups.flatMap((el) => el.match);

      return [groupCalculate({ match: matches, teamIds: tournament.teamIds })];
    } else {
      const group = tournament.groups.map((el) => {
        return groupCalculate({ match: el.match, teamIds: el.teamIds });
      });
      // const bracket:IStep[] = []
      return group;
    }
  }

  async getApplications({
    tournamentId,
    teamId,
  }: {
    tournamentId: string;
    teamId?: string;
  }) {
    if (teamId) {
      const res = await this.prisma.tournamentApplication.findFirst({
        where: {
          tournamentId,
          teamId,
        },
        include: {
          players: true,
          team: {
            select: { name: true },
          },
        },
      });
      return res ? [res] : [];
    } else {
      return await this.prisma.tournamentApplication.findMany({
        where: {
          tournamentId,
          teamId,
        },
        include: {
          players: true,
          team: {
            select: { name: true },
          },
        },
      });
    }
  }

  async createApplication({
    playerIds,
    teamId,
    tournamentId,
  }: CreateTournamentApplicationDto) {
    if (!tournamentId || !playerIds || !teamId) {
      throw new BadRequestException('Необходимые поля не заполнены');
    }

    const [tournament, players, team] = await Promise.all([
      this.prisma.tournament.findUnique({
        where: { id: tournamentId },
      }),
      this.prisma.player.findMany({
        where: { id: { in: playerIds } },
      }),
      this.prisma.team.findUnique({
        where: { id: teamId },
      }),
    ]);

    if (!tournament) {
      throw new BadRequestException('Турнир не найден');
    } else if (tournament.status !== 'NotStarted') {
      throw new BadRequestException('Прием заявок завершен');
    }

    if (players.length !== playerIds.length) {
      throw new BadRequestException('Не все указанные игроки найдены');
    }
    if (!team) throw new BadRequestException('Команда не найдена');

    try {
      await this.prisma.tournamentApplication.create({
        data: {
          players: { connect: players.map((player) => ({ id: player.id })) },
          team: { connect: { id: team.id } },
          tournament: { connect: { id: tournament.id } },
        },
      });
      return { message: 'Заявка успешно подана' };
    } catch (error) {
      throw new BadRequestException('Ошибка при создании заявки');
    }
  }

  async updateApplication({
    playerIds,
    id,
  }: {
    playerIds: string[];
    id: string;
  }) {
    const players = await this.prisma.player.findMany({
      where: { id: { in: playerIds } },
    });
    await this.prisma.tournamentApplication.update({
      where: {
        id,
      },
      data: {
        players: {
          set: players,
        },
      },
    });
    return { message: 'Заявка успешно подана' };
  }

  async createTours(tournamentId: string) {
    const tournament = await this.prisma.tournament.findUnique({
      where: { id: tournamentId },
      select: { teamIds: true, status: true, tournamentType: true },
    });

    if (!tournament) {
      throw new BadRequestException('Tournament not found.');
    }

    if (tournament.status !== 'NotStarted') {
      throw new BadRequestException('Tournament pending.');
    }

    const teamIds = tournament.teamIds.map((team) => team.id);

    if (teamIds.length < 2) {
      throw new BadRequestException('Minimum 2 teams required for tournament.');
    }

    if (!!(teamIds.length % 2)) {
      throw new BadRequestException('Нечетное кол-во команд');
    }

    try {
      if (tournament.tournamentType === 'LEAGUE') {
        await this.groupService.create({
          teamIds,
          tournamentId,
        });
      } else if (tournament.tournamentType === 'CUP') {
        if (teamIds.length !== 16) {
          throw new BadRequestException('Команд должно быть 16');
        }

        const teams = Array.from({ length: teamIds.length / 4 }, (_, index) =>
          teamIds.slice(index * 4, index * 4 + 4),
        );
        for (let i = 0; i < 4; i++) {
          await this.groupService.create({
            teamIds: teams[i],
            tournamentId,
          });
        }
      }

      await this.prisma.tournament.update({
        where: { id: tournamentId },
        data: { status: { set: 'Pending' } },
      });
      return { message: 'Жеребьевка турнира успешно создана' };
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async updateStage(id: string) {
    const tournament = await this.prisma.tournament.findUnique({
      where: {
        id,
      },
      select: {
        status: true,
        tournamentType: true,
        matchType: true,
        groups: {
          select: {
            match: {
              where: {
                status: { notIn: ['NotStarted', 'Suspended', 'Preparation'] },
              },
              include: {
                matchTimeline: {
                  where: {
                    type: 'GOAL',
                  },
                },
                teams: true,
              },
            },
            teamIds: true,
          },
        },
      },
    });

    const matches = tournament.groups.flatMap((el) => el.match);

    if (
      tournament.status === 'Completed' &&
      matches.length <= 0 &&
      matches.some((el) => el.status !== 'Completed')
    )
      return;

    if (tournament.tournamentType === 'LEAGUE') {
      await this.tournamentEnd(id, groupCalculate(tournament.groups[0])[0].id);
      return;
    } else if (tournament.tournamentType === 'CUP') {
      const isPlayOff = matches.some((el) => !el.groupId);

      let teams: string[] = [];

      const minStepItem = matches.reduce((min, item) => {
        return item.step && item.step < min ? item.step : min;
      }, 4);

      if (!isPlayOff) {
        teams = tournament.groups.flatMap((el) =>
          groupCalculate(el)
            .slice(0, 2)
            .map((team) => team.id),
        );
      } else {
        teams = await this.prisma.match
          .findMany({
            where: { tournamentId: id, step: minStepItem },
            orderBy: [{ round: 'asc' }],
            select: {
              winnerId: true,
            },
          })
          .then((el) => el.map((t) => t.winnerId));
      }

      const mathesStep: {
        teamIds: string[];
        round: number;
        step?: number;
      }[] = [];

      for (let i = 0; i < teams.length; i += 2) {
        mathesStep.push({
          teamIds: [teams[i], teams[i + 1]],
          round: i / 2 + 1, // Инкрементируем значение round
          step: minStepItem - 1,
        });
      }

      // this.matchService.createMany({
      //   type: tournament.matchType,
      //   tournamentId: id,
      //   matches: mathesStep,
      // });
    }
  }

  async tournamentEnd(id, winnerId) {
    await this.prisma.tournament.update({
      where: {
        id,
      },
      data: {
        status: 'Completed',
        winner: {
          connect: { id: winnerId },
        },
      },
    });
  }
}
