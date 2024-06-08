import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { PrismaService } from '../prisma.service';
import { UserService } from '../user/user.service';
import * as argon2 from 'argon2';
import { Prisma } from '@prisma/client';

@Injectable()
export class PlayerService {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
  ) {}

  async create(createUserDto: CreatePlayerDto) {
    const password = await argon2.hash(createUserDto.password);
    const teamId = createUserDto.teamId;

    await this.prisma.$transaction(async (tx) => {
      const user = await this.userService.create({
        ...createUserDto,
        password,
        role: 'PLAYER',
      });

      const team = await tx.team.findUnique({
        where: { id: teamId },
        select: { capitanId: true },
      });

      if (team && !team.capitanId) {
        await tx.team.update({
          where: { id: teamId },
          data: { capitan: { connect: { id: user.id } } },
        });
      }
    });
  }

  async findList(query: {
    current: number;
    pageSize: number;
    teamId?: string;
  }) {
    const { pageSize = 10, current = 1, teamId } = query;
    const pageNumber = Math.max(1, current);
    const skip = (pageNumber - 1) * pageSize;
    const take = +pageSize;

    const results = await this.prisma.user.findMany({
      take,
      skip,
      where: {
        teamId,
        role: 'PLAYER',
      },
      include: {
        team: { select: { name: true } },
        matchTimeline: {
          select: {
            type: true,
          },
        },
      },
    });

    const totalCount = await this.prisma.user.count({ where: { teamId } });

    results.forEach((player) => {
      const statistic = player.matchTimeline.reduce(
        (acc, event) => {
          switch (event.type) {
            case 'GOAL':
              acc.goals++;
              break;
            case 'YELLOW':
              acc.yellow++;
              break;
            case 'RED':
              acc.red++;
              break;
          }
          return acc;
        },
        { goals: 0, yellow: 0, red: 0 },
      );

      player['score'] = statistic;
      delete player.matchTimeline;
    });

    return {
      data: results,
      page: pageNumber,
      pageSize,
      total: totalCount,
    };
  }

  async findAll({ where }: { where?: Prisma.UserWhereInput }) {
    return this.userService.findAll({ where: { ...where, role: 'PLAYER' } });
  }

  async getDictionary({
    teamId,
    tournamentId,
  }: {
    teamId?: string;
    tournamentId?: string;
  }) {
    const whereCondition: Prisma.UserWhereInput = { role: 'PLAYER' };
    if (tournamentId) {
      whereCondition.tournamentApplications = {
        some: { tournamentId },
      };
    }
    if (teamId) {
      whereCondition.teamId = teamId;
    }

    const list = await this.prisma.user.findMany({
      where: whereCondition,
      select: {
        id: true,
        name: true,
      },
    });
    return list.map((el) => ({ label: el.name, value: el.id }));
  }

  async findOne(id: string) {
    const player = await this.prisma.user.findUnique({
      where: { id },
      include: { team: true, captainedTeam: true },
    });

    if (!player) {
      throw new BadRequestException('Игрок не найден');
    }

    const [matches, goals] = await Promise.all([
      // TODO:

      this.prisma.match.findMany({
        where: {
          status: 'Completed',
          matchApplications: {
            some: {
              players: { some: { id: player.id } },
            },
          },
        },
        include: {
          matchTimeline: { where: { playerId: player.id, type: 'GOAL' } },
        },
      }),
      this.prisma.matchTimeline.count({
        where: { playerId: player.id, type: 'GOAL' },
      }),
    ]);

    const results = { matches: matches.length, goals };

    return { ...player, results };
  }

  async update(id: string, updatePlayerDto: UpdatePlayerDto) {
    return await this.userService.update(id, updatePlayerDto);
  }
}
