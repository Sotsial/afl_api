import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { PrismaService } from '../prisma.service';
import { UpdateMatchApplicationDto } from './dto/update-match-application.dto';
import { MatchStatus } from '@prisma/client';
import { CreateMatchEventDto } from './dto/create-match-event-dto';
import { defineWinner } from 'src/utils/utils';

@Injectable()
export class MatchService {
  constructor(private prisma: PrismaService) {}

  async create(createMatchDto: CreateMatchDto) {
    // Validate tournament existence
    const tournament = await this.prisma.tournament.findUniqueOrThrow({
      where: { id: createMatchDto.tournamentId },
    });

    const teamIds = createMatchDto.teams;
    const teams = await this.prisma.team.findMany({
      where: { id: { in: teamIds } },
    });

    if (teams.length !== teamIds.length) {
      throw new BadRequestException(
        'Указаны неверные идентификаторы команды. Все команды должны существовать',
      );
    }

    const match = await this.prisma.match.create({
      data: {
        teams: { connect: teams },
        tournament: { connect: tournament },
        matchApplications: {
          createMany: { data: teams.map((team) => ({ teamId: team.id })) },
        },
        round: createMatchDto.round,
      },
    });

    return match;
  }

  async createMany({
    matches,
    tournamentId,
  }: {
    matches: { teams: string[]; round: number }[];
    tournamentId: string;
  }) {
    const matchesData = await Promise.all(
      matches.map(async (el) => {
        return {
          ...el,
          teamIds: el.teams,
          tournamentId,
          round: el.round,
        };
      }),
    );

    try {
      await this.prisma.$transaction(async (tx) => {
        for (const match of matchesData) {
          await tx.match.create({
            data: {
              teams: { connect: match.teamIds.flatMap((el) => ({ id: el })) },
              tournament: { connect: { id: tournamentId } },
              matchApplications: {
                createMany: {
                  data: match.teams.map((team) => ({ teamId: team })),
                },
              },
              round: match.round,
            },
          });
        }

        return { message: 'Жеребьевка турнира успешно создана' };
      });
    } catch {
      throw new BadRequestException('Ошибка при жеребьевки турнира');
    }
  }

  async findList(query: {
    current: number;
    pageSize: number;
    userId?: string;
  }) {
    const { pageSize = 10, current = 1, userId } = query;

    const pageNumber = Math.max(1, current);
    const skip = (pageNumber - 1) * pageSize;
    const take = +pageSize;

    let user;

    if (userId) {
      user = await this.prisma.user.findUnique({
        where: {
          id: query.userId,
        },
        select: {
          player: {
            select: {
              teamId: true,
            },
          },
        },
      });
    }

    const results = await this.prisma.match.findMany({
      where: {
        teams: {
          some: {
            id: user?.player?.teamId,
          },
        },
      },
      take,
      skip,
      include: {
        teams: true,
        tournament: true,
      },

      orderBy: [{ status: 'desc' }, { date: 'asc' }],
    });

    const totalCount = await this.prisma.match.count();

    return {
      data: results,
      page: pageNumber,
      pageSize: pageSize,
      total: totalCount,
    };
  }

  async findAll({
    limit = 100,
    status,
    teamId,
    playerId,
  }: {
    limit?: number;
    status?: string;
    teamId?: string;
    playerId?: string;
  }) {
    const where: Record<string, any> = {};

    if (status) {
      where.status = { in: status.split(',') as MatchStatus[] };
    }

    if (teamId) {
      where.teams = { some: { id: teamId } };
    }

    if (playerId) {
      where.matchApplications = {
        some: { players: { some: { id: playerId } } },
      };
    }

    const matches = await this.prisma.match.findMany({
      include: {
        teams: {
          select: { id: true, name: true },
        },
        matchTimeline: {
          where: { type: 'GOAL' },
          select: { teamId: true },
        },
      },
      where,
      orderBy: [{ status: 'desc' }, { date: 'asc' }],
      take: +limit,
    });

    matches.forEach((match) => {
      match.teams.forEach((team) => {
        team['goals'] = match.matchTimeline.reduce(
          (acc, el) => (el.teamId === team.id ? acc + 1 : acc),
          0,
        );
      });
    });

    return matches;
  }

  async findOne(id: string) {
    const match = await this.prisma.match.findUnique({
      where: { id },
      include: {
        teams: {
          select: { id: true, name: true },
        },

        matchApplications: {
          include: {
            players: true,
            team: { select: { id: true, name: true } },
          },
        },
        matchTimeline: {
          where: { type: 'GOAL' },
          select: { teamId: true },
        },
      },
    });

    if (match && match.teams) {
      match.teams.forEach((team) => {
        team['goals'] = match.matchTimeline.reduce(
          (acc, el) => (el.teamId === team.id ? acc + 1 : acc),
          0,
        );
      });
    }

    return match;
  }

  async update(id: string, updateMatchDto: UpdateMatchDto) {
    const { date, place, firstReferee, mainReferee, secondReferee } =
      updateMatchDto;
    await this.prisma.match.update({
      where: {
        id,
      },
      data: {
        date,
        place,
        mainReferee,
        firstReferee,
        secondReferee,
      },
    });
    return { message: 'Матч сохранен' };
  }

  async updateApplication(
    UpdateMatchApplicationDto: UpdateMatchApplicationDto,
  ) {
    const { match } = await this.prisma.matchApplication.findUnique({
      where: {
        id: UpdateMatchApplicationDto.id,
      },
      select: {
        match: true,
      },
    });

    if (match.status !== 'NotStarted') {
      throw new BadRequestException('Прием заявок завершен');
    }

    const players = await this.prisma.player.findMany({
      where: {
        id: {
          in: UpdateMatchApplicationDto.playerIds,
        },
      },
    });

    await this.prisma.matchApplication.update({
      where: { id: UpdateMatchApplicationDto.id },
      data: {
        players: {
          set: players.map((player) => ({ id: player.id })),
        },
        color: UpdateMatchApplicationDto.color,
      },
    });

    return { message: 'Заявка создана' };
  }

  async updateStage(id: string) {
    const { status, half } = await this.prisma.match.findUnique({
      where: {
        id,
      },
    });
    if (status === 'NotStarted') return this.preparingMatch(id);
    else if (status === 'Preparation') return this.startMatch(id);
    else if (status === 'Pending' && half === 1)
      return this.halfTimeMatch(id, 'start');
    else if (status === 'Break') return this.halfTimeMatch(id, 'end');
    else if (status === 'Pending' && half === 2) return this.endMatch(id);
  }

  async preparingMatch(id: string) {
    const match = await this.prisma.match.findUnique({
      where: {
        id,
      },
      include: {
        matchApplications: {
          include: {
            players: true,
          },
        },
      },
    });

    const isInadequatePlayers = match.matchApplications.some(
      (application) => application.players.length < 5,
    );

    if (isInadequatePlayers)
      throw new BadRequestException('В заявке не хватает игроков');

    await this.prisma.match.update({
      where: { id },
      data: {
        status: { set: 'Preparation' },
      },
    });
  }

  async halfTimeMatch(id: string, status: 'start' | 'end') {
    if (status === 'start') {
      await this.prisma.match.update({
        where: {
          id,
        },
        data: {
          half: 2,
          status: 'Break',
          time: 20,
        },
      });
      return { message: 'Перерыв' };
    } else if (status === 'end') {
      await this.prisma.match.update({
        where: {
          id,
        },
        data: {
          half: 2,
          status: 'Pending',
        },
      });
      return { message: 'Второй тайм' };
    }
  }

  async startMatch(id: string) {
    const match = await this.prisma.match.findUnique({
      where: {
        id,
      },
      include: {
        matchApplications: {
          include: {
            players: true,
          },
        },
      },
    });

    if (match.status === 'Pending' || match.status === 'Completed') {
      throw new BadRequestException('Матч стартовал');
    }

    await this.prisma.match.update({
      where: { id },
      data: {
        status: { set: 'Pending' },
      },
    });
    return { message: 'Матч стартовал' };
  }

  async updateTime() {
    return this.prisma.match.updateMany({
      where: { status: 'Pending' },
      data: {
        time: {
          increment: 1,
        },
      },
    });
  }

  async changeTime(id: string, time: number) {
    return this.prisma.match.update({
      where: { id },
      data: {
        time,
      },
    });
  }

  async endMatch(id: string) {
    const match = await this.prisma.match.findUnique({
      where: {
        id,
      },
      include: {
        matchApplications: {
          include: {
            players: true,
          },
        },
        matchTimeline: true,
        teams: true,
      },
    });

    const winningTeamId = defineWinner(match);

    await this.prisma.match.update({
      where: { id },
      data: {
        status: { set: 'Completed' },
        winnerId: winningTeamId,
      },
    });
    return { message: 'Матч окончен' };
  }

  async createMatchEvent({
    teamId,
    matchId,
    playerId,
    half,
    time,
    type,
  }: CreateMatchEventDto) {
    return this.prisma.matchTimeline.create({
      data: {
        team: { connect: { id: teamId } },
        match: { connect: { id: matchId } },
        player: { connect: { id: playerId } },
        half,
        time,
        type,
      },
    });
  }

  async findMatchEvents(id: string) {
    return this.prisma.matchTimeline.findMany({
      where: {
        matchId: id,
      },
      include: {
        player: {
          select: {
            user: { select: { name: true } },
          },
        },
      },
    });
  }
}
