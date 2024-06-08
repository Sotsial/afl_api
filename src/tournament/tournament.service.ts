import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { PrismaService } from '../prisma.service';
import { CreateTournamentApplicationDto } from './dto/create-tournament-application.dto';
import { GroupService, groupCalculate } from 'src/group/group.service';
import { UserService } from 'src/user/user.service';
import { MatchService } from 'src/match/match.service';

@Injectable()
export class TournamentService {
  constructor(
    private prisma: PrismaService,
    private groupService: GroupService,
    private userService: UserService,
    private matchService: MatchService,
  ) {}

  async create(data: CreateTournamentDto) {
    return this.prisma.tournament.create({
      data,
    });
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
    return this.prisma.tournament.findMany({
      include: { winner: { select: { name: true } } },
    });
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
        teams: true,
      },
    });

    return {
      ...tournament,
      teamIds: tournament.teams.flatMap((el) => el.id),
    };
  }

  update(id: string, { teamIds, ...data }: UpdateTournamentDto) {
    return this.prisma.tournament.update({
      where: {
        id,
      },
      data: {
        teams: {
          set: teamIds?.map((team) => ({
            id: team,
          })),
        },
        ...data,
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
            teams: true,
          },
        },
        teams: true,
        tournamentType: true,
      },
    });
    if (tournament.tournamentType === 'LEAGUE') {
      const matches = tournament.groups.flatMap((el) => el.match);

      const group = [
        groupCalculate({ match: matches, teams: tournament.teams }),
      ];
      return { group };
    } else {
      const group = tournament.groups.map((el) => {
        return groupCalculate({ match: el.match, teams: el.teams });
      });

      const playoff = await this.prisma.match.findMany({
        where: {
          tournamentId: id,
          groupId: null,
        },
        select: {
          teams: { select: { name: true } },
          step: true,
          round: true,
          date: true,
        },
      });
      return { group, playoff };
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
      // TODO:
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
      // TODO:

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
      this.userService.findAll({
        where: { id: { in: playerIds } },
      }),

      // TODO:
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
    const players = await this.prisma.user.findMany({
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
      select: {
        teams: true,
        status: true,
        tournamentType: true,
        teamCount: true,
        groupCount: true,
        winnerGroupCount: true,
      },
    });

    const { teamCount, groupCount, winnerGroupCount } = tournament;

    if (!tournament) {
      throw new BadRequestException('Tournament not found.');
    }

    if (tournament.status !== 'NotStarted') {
      throw new BadRequestException('Tournament pending.');
    }

    const teamIds = tournament.teams.map((team) => team.id);

    try {
      if (tournament.tournamentType === 'LEAGUE') {
        await this.groupService.create({
          teamIds,
          tournamentId,
        });
      } else if (tournament.tournamentType === 'CUP') {
        if (teamIds.length !== teamCount) {
          throw new BadRequestException(`Команд должно быть ${teamCount}`);
        }

        const teamsPerGroup = teamCount / groupCount; // Определяем количество команд в каждой группе

        const teams = Array.from({ length: groupCount }, (_, index) =>
          teamIds.slice(
            index * teamsPerGroup,
            index * teamsPerGroup + teamsPerGroup,
          ),
        );

        for (let i = 0; i < groupCount; i++) {
          await this.groupService.create({
            teamIds: teams[i],
            tournamentId,
            winnerCount: winnerGroupCount,
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
        winnerGroupCount: true,
        groupCount: true,
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
            teams: true,
            id: true,
          },
        },
      },
    });

    const matches = tournament.groups.flatMap((el) => el.match);

    if (
      tournament.status === 'Completed' ||
      matches.length <= 0 ||
      matches.some((el) => el.status !== 'Completed')
    )
      return;

    if (tournament.tournamentType === 'LEAGUE') {
      await this.tournamentEnd(id, groupCalculate(tournament.groups[0])[0].id);
      return;
    } else if (tournament.tournamentType === 'CUP') {
      const matches = await this.prisma.match.findMany({
        where: { tournamentId: id },
        select: { groupId: true, step: true, status: true },
      });

      const isPlayOff = matches.some((el) => !el.groupId);
      const isPending = matches.some((el) => el.status !== 'Completed');
      if (isPending) return;
      let teams: string[] = [];

      const minStepItem = matches.reduce((min, item) => {
        return item.step && item.step < min ? item.step : min;
      }, tournament.winnerGroupCount * tournament.groupCount);

      if (isPlayOff && minStepItem === 1) {
        const final = await this.prisma.match.findFirst({
          where: { tournamentId: id, step: 1, status: 'Completed' },
          select: { winnerId: true },
        });

        return await this.tournamentEnd(id, final.winnerId);
      }

      if (!isPlayOff) {
        teams = tournament.groups.flatMap((el) =>
          groupCalculate(el)
            .slice(0, tournament.winnerGroupCount)
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
          step: minStepItem / 2,
        });
      }
      this.matchService.createMany({
        type: tournament.matchType,
        tournamentId: id,
        matches: mathesStep,
      });
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
