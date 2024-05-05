import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { PrismaService } from '../prisma.service';
import { CreateTournamentApplicationDto } from './dto/create-tournament-application.dto';
import { MatchService } from '../match/match.service';

@Injectable()
export class TournamentService {
  constructor(
    private prisma: PrismaService,
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
      },
    });
    return list.map((el) => ({ label: el.name, value: el.id }));
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
        match: {
          where: {
            status: 'Completed',
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
    });

    const table = tournament.teamIds.map((team) => {
      const myMathes = tournament.match.filter((match) =>
        match.teams.some((el) => el.id === team.id),
      );

      const results = countGoalsAndResultsWithPoints(myMathes, team.id);

      return { ...team, ...results };
    });

    table.sort((a, b) => {
      if (a.points < b.points) return 1;
      if (a.points > b.points) return -1;
      if (a.difference < b.difference) return 1;
      if (a.difference > b.difference) return -1;
      return 0;
    });

    return table;
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
    const existingMatch = await this.prisma.match.findFirst({
      where: { tournamentId },
    });

    if (existingMatch) {
      throw new BadRequestException(
        'Tournament draw has already been generated.',
      );
    }

    const tournament = await this.prisma.tournament.findUnique({
      where: { id: tournamentId },
      select: { teamIds: true },
    });

    if (!tournament) {
      throw new BadRequestException('Tournament not found.');
    }

    const teamIds = tournament.teamIds.flatMap((team) => team.id);

    if (teamIds.length < 2) {
      throw new BadRequestException('Minimum 2 teams required for tournament.');
    }

    if (!!(teamIds.length % 2)) {
      throw new BadRequestException('Нечетное кол-во команд');
    }

    function generateRoundRobinSchedule(teams) {
      const numTeams = teams.length;
      const schedule = [];

      if (numTeams % 2 !== 0) {
        teams.push('Dummy');
      }

      const numRounds = numTeams - 1;
      const halfNumTeams = numTeams / 2;

      for (let round = 0; round < numRounds; round++) {
        const roundSchedule = [];

        for (let i = 0; i < halfNumTeams; i++) {
          const match = [teams[i], teams[numTeams - i - 1]];
          roundSchedule.push(match);
        }

        schedule.push(roundSchedule);

        // Rotate teams
        teams.splice(1, 0, teams.pop());
      }

      return schedule;
    }

    // Выводим список туров
    const tourList = generateRoundRobinSchedule(teamIds);

    const matchesToCreate = tourList.flatMap((roundMatches, index) =>
      roundMatches.map((match) => ({
        teams: [match[0], match[1]],
        round: index + 1,
      })),
    );

    try {
      await this.matchService.createMany({
        tournamentId,
        matches: matchesToCreate,
      });

      await this.prisma.tournament.update({
        where: { id: tournamentId },
        data: { status: { set: 'Pending' } },
      });
      return { message: 'Жеребьевка турнира успешно создана' };
    } catch (error) {
      return error;
    }
  }
}

const countGoalsAndResultsWithPoints = (matches, teamId) => {
  let goalsScored = 0;
  let goalsConceded = 0;
  let wins = 0;
  let draws = 0;
  let losses = 0;
  let points = 0;

  for (const match of matches) {
    for (const event of match.matchTimeline) {
      if (event.type === 'GOAL') {
        if (event.teamId === teamId) {
          goalsScored++;
        } else {
          goalsConceded++;
        }
      }
    }

    if (match.winnerId === teamId) {
      wins++;
      points += 3;
    } else if (match.winnerId === null) {
      draws++;
      points += 1;
    } else {
      losses++;
    }
  }

  return {
    scored: goalsScored,
    conceded: goalsConceded,
    difference: goalsScored - goalsConceded,
    matches: matches.length,
    wins: wins,
    draws: draws,
    losses: losses,
    points: points,
  };
};
