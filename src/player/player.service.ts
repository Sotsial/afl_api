import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { PrismaService } from '../prisma.service';
import { UserService } from '../user/user.service';
import * as argon2 from 'argon2';

@Injectable()
export class PlayerService {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
  ) {}

  async create({ name, teamId, email, password }: CreatePlayerDto) {
    try {
      await this.prisma.$transaction(async (tx) => {
        const team = await tx.team.findUnique({
          where: { id: teamId },
          select: {
            capitanId: true,
            id: true,
          },
        });

        if (!team) {
          throw new BadRequestException('Команда не найдена');
        }

        const pass = await argon2.hash(password);
        const user = await tx.user.create({
          data: { email: email.toLowerCase(), name, password: pass },
        });

        const player = await tx.player.create({
          data: {
            userId: user.id,
            teamId: team.id,
          },
        });

        if (!team.capitanId) {
          await tx.team.update({
            where: {
              id: teamId,
            },
            data: {
              capitan: { connect: player },
            },
          });
        }

        return { message: 'Игрок создан' };
      });
    } catch {
      throw new BadRequestException('Ошибка при создании игрока');
    }
  }

  async findList(query: {
    current: number;
    pageSize: number;
    teamId?: string;
    tournamentId?: string;
  }) {
    const { pageSize = 10, current = 1, teamId } = query;
    const pageNumber = Math.max(1, current);
    const skip = (pageNumber - 1) * pageSize;
    const take = +pageSize;

    const results = await this.prisma.player.findMany({
      take,
      skip,
      where: {
        teamId,
      },
      include: {
        team: { select: { name: true } },
        user: { select: { name: true } },
        matchTimeline: {
          select: {
            type: true,
          },
        },
      },
    });

    const totalCount = await this.prisma.player.count();

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

  findAll() {
    return this.prisma.player.findMany();
  }

  async getDictionary({
    teamId,
    tournamentId,
  }: {
    teamId?: string;
    tournamentId?: string;
  }) {
    const whereCondition: any = {};
    if (tournamentId) {
      whereCondition.tournamentApplications = {
        some: { tournamentId },
      };
    }
    if (teamId) {
      whereCondition.teamId = teamId;
    }

    const list = await this.prisma.player.findMany({
      where: whereCondition,
      select: {
        id: true,
        user: true,
      },
    });
    return list.map((el) => ({ label: el.user.name, value: el.id }));
  }

  async findOne(id: string) {
    const player = await this.prisma.player.findUnique({
      where: { id },
      include: { team: true, user: true, captainedTeam: true },
    });

    if (!player) {
      throw new BadRequestException('Игрок не найден');
    }

    const [matches, goals] = await Promise.all([
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
    const player = await this.prisma.player.findUnique({
      where: { id },
      select: { userId: true },
    });
    await this.userService.update(player.userId, updatePlayerDto);

    if (updatePlayerDto.teamId) {
      await this.prisma.player.update({
        where: {
          id,
        },
        data: updatePlayerDto,
      });
    }

    return { message: 'Игрок сохранен' };
  }
}
