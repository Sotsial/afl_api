import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { PrismaService } from 'src/prisma.service';
import { CreateTournamentApplicationDto } from './dto/create-tournament-application.dto';
import { MatchService } from 'src/match/match.service';

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
    const pageSize = Number(query.pageSize) ?? 10;
    const pageNumber = Number(query.current) ?? 10;

    const results = await this.prisma.tournament.findMany({
      take: pageSize,
      skip: (pageNumber - 1) * pageSize,
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

    function countGoalsAndResultsWithPoints(matches, teamId) {
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
    }

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

  remove(id: string) {
    return `This action removes a #${id} tournament`;
  }

  async createApplication(
    tournamentApplicationDto: CreateTournamentApplicationDto,
  ) {
    const players = await this.prisma.player.findMany({
      where: {
        id: {
          in: tournamentApplicationDto.playerIds,
        },
      },
    });

    const team = await this.prisma.team.findUnique({
      where: {
        id: tournamentApplicationDto.teamId,
      },
    });

    const tournament = await this.prisma.tournament.findUnique({
      where: {
        id: tournamentApplicationDto.tournamentId,
      },
    });

    return this.prisma.tournamentApplication.create({
      data: {
        players: {
          connect: players.map((player) => ({ id: player.id })),
        },
        team: {
          connect: { id: team.id },
        },
        tournament: {
          connect: { id: tournament.id },
        },
      },
    });
  }

  async createTours(tournamentId: string) {
    const checkDraw = await this.prisma.match.findFirst({
      where: { tournamentId },
    });

    if (checkDraw) throw new BadRequestException('Жеребьевка уже проведена');

    const teams = await this.prisma.tournament.findUnique({
      where: { id: tournamentId },
      select: { teamIds: true },
    });

    const teamIds = teams.teamIds.flatMap((el) => el.id);

    // Проверка количества команд
    if (teamIds.length < 2) {
      throw new BadRequestException('Необходимо минимум 2 команды');
    }

    // Создание парных матчей
    for (let i = 0; i < teamIds.length; i++) {
      const teamId = teamIds[i];
      for (let j = i + 1; j < teamIds.length; j++) {
        const opponentId = teamIds[j];
        await this.matchService.create({
          teams: [teamId, opponentId],
          tournamentId,
        });
      }
    }

    await this.prisma.tournament.update({
      where: {
        id: tournamentId,
      },
      data: {
        status: { set: 'Pending' },
      },
    });
    return { message: 'Жеребьевка турнира прошла' };
  }
}
