import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { PrismaService } from '../prisma.service';
import { CreateMatchApplicationDto } from './dto/create-match-application.dto';
import { UpdateMatchApplicationDto } from './dto/update-match-application.dto';
import { CreateMatchEventDto } from './dto/create-match-event-dto';
import { MatchStatus } from '@prisma/client';

@Injectable()
export class MatchService {
  constructor(private prisma: PrismaService) {}

  async create(createMatchDto: CreateMatchDto) {
    const tournament = await this.prisma.tournament.findUnique({
      where: {
        id: createMatchDto.tournamentId,
      },
    });

    const teams = await this.prisma.team.findMany({
      where: {
        id: {
          in: createMatchDto.teams,
        },
      },
    });

    return this.prisma.match.create({
      data: {
        teams: {
          connect: teams,
        },
        tournament: {
          connect: tournament,
        },
        matchApplications: {
          createMany: { data: teams.map((el) => ({ teamId: el.id })) },
        },
      },
      include: { teams: true },
    });
  }

  async findList(query: { current: number; pageSize: number; userId: string }) {
    const pageSize = Number(query.pageSize) ?? 10;
    const pageNumber = Number(query.current) ?? 10;

    const user = await this.prisma.user.findUnique({
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

    const results = await this.prisma.match.findMany({
      where: {
        teams: {
          some: {
            id: user.player?.teamId,
          },
        },
      },
      take: pageSize,
      skip: (pageNumber - 1) * pageSize,
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
    limit,
    status,
    teamId,
    playerId,
  }: {
    limit?: number;
    status?: string;
    teamId?: string;
    playerId?: string;
  }) {
    const take = limit ? Number(limit) : 100;

    const whereClause: Record<string, any> = {};

    if (status) {
      whereClause.status = { in: status.split(',') as MatchStatus[] };
    }

    if (teamId) {
      whereClause.teams = { some: { id: teamId } };
    }

    if (playerId) {
      whereClause.matchApplications = {
        some: { players: { some: { id: playerId } } },
      };
    }

    const matches = await this.prisma.match.findMany({
      include: {
        teams: true,
        matchTimeline: { where: { type: 'GOAL' }, select: { teamId: true } },
      },

      where: whereClause,
      orderBy: [{ status: 'desc' }, { date: 'asc' }],
      take,
    });

    matches.forEach((match) => {
      match.teams.forEach((team) => {
        team['goals'] = match.matchTimeline.filter(
          (el) => el.teamId === team.id,
        ).length;
      });
    });

    return matches;
  }

  async findOne(id: string) {
    const match = await this.prisma.match.findUnique({
      where: { id },
      include: {
        teams: true,
        matchApplications: {
          include: {
            players: true,
            team: true,
          },
        },
        matchTimeline: true,
      },
    });

    match.teams.forEach((team) => {
      team['goals'] = match.matchTimeline.filter(
        (el) => el.teamId === team.id,
      ).length;
    });

    return match;
  }

  update(id: string, updateTeamDto: UpdateMatchDto) {
    return this.prisma.match.update({
      where: {
        id,
      },
      data: {
        date: updateTeamDto.date,
      },
    });
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
      },
    });
    return { message: 'Заявка создана' };
  }
  async createApplication(
    CreateMatchApplicationDto: CreateMatchApplicationDto,
  ) {
    const match = await this.prisma.match.findUnique({
      where: {
        id: CreateMatchApplicationDto.matchId,
      },
    });

    if (match.status !== 'NotStarted') {
      throw new BadRequestException('Прием заявок завершен');
    }

    const players = await this.prisma.player.findMany({
      where: {
        id: {
          in: CreateMatchApplicationDto.playerIds,
        },
      },
    });

    const team = await this.prisma.team.findUnique({
      where: {
        id: CreateMatchApplicationDto.teamId,
      },
    });

    return this.prisma.matchApplication.create({
      data: {
        players: {
          connect: players.map((player) => ({ id: player.id })),
        },
        team: {
          connect: { id: team.id },
        },
        match: {
          connect: { id: match.id },
        },
      },
    });
  }

  async updateStage(id: string) {
    const match = await this.prisma.match.findUnique({
      where: {
        id,
      },
    });
    if (match.status === 'NotStarted') return this.startMatch(id);
    else if (match.status === 'Pending') return this.endMatch(id);
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

    if (match.status !== 'NotStarted') {
      throw new BadRequestException('Матч стартовал');
    }

    const isInadequatePlayers = match.matchApplications.some(
      (application) => application.players.length < 5,
    );

    if (isInadequatePlayers)
      throw new BadRequestException('В заявке не хватает игроков');

    await this.prisma.match.update({
      where: { id },
      data: {
        status: { set: 'Pending' },
      },
    });
    return { message: 'Матч стартовал' };
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

    const goals = match.matchTimeline.filter((el) => el.type === 'GOAL');

    function countTeamGoals(goals) {
      const teamGoals = {};
      for (const event of goals) {
        if (event.type === 'GOAL') {
          const teamId = event.teamId;
          teamGoals[teamId] = (teamGoals[teamId] || 0) + 1;
        }
      }
      return teamGoals;
    }

    const teamGoals = countTeamGoals(goals);

    const [firstTeam, secondTeam] = match.teams;

    let winningTeamId = null;

    if (teamGoals[firstTeam.id] > teamGoals[secondTeam.id]) {
      winningTeamId = firstTeam.id;
    } else if (teamGoals[firstTeam.id] < teamGoals[secondTeam.id]) {
      winningTeamId = secondTeam.id;
    }

    await this.prisma.match.update({
      where: { id },
      data: {
        status: { set: 'Completed' },
        winnerId: winningTeamId,
      },
    });
    return { message: 'Матч окончен' };
  }

  async createMatchEvent(CreateMatchEventDto: CreateMatchEventDto) {
    return this.prisma.matchTimeline.create({
      data: CreateMatchEventDto,
    });
  }

  async findMatchEvents(id: string) {
    return this.prisma.matchTimeline.findMany({
      where: {
        matchId: id,
      },
      include: {
        player: true,
      },
    });
  }

  remove(id: string) {
    return `This action removes a #${id} match`;
  }
}
