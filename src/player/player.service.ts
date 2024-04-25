import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { PrismaService } from '../prisma.service';
import { UserService } from '../user/user.service';

@Injectable()
export class PlayerService {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
  ) {}

  async create({ name, teamId, email, password }: CreatePlayerDto) {
    const team = await this.prisma.team.findUnique({
      where: { id: teamId },
    });

    const user = await this.userService.create({ email, name, password });

    await this.prisma.player.create({
      data: {
        name,
        user: {
          connect: user,
        },
        team: {
          connect: team,
        },
      },
    });

    return { message: 'Игрок создан' };
  }

  async findList(query: { current: number; pageSize: number }) {
    const pageSize = Number(query.pageSize) ?? 10;
    const pageNumber = Number(query.current) ?? 10;

    const results = await this.prisma.player.findMany({
      take: pageSize,
      skip: (pageNumber - 1) * pageSize,
      include: {
        team: true,
      },
    });

    const totalCount = await this.prisma.player.count();

    return {
      data: results,
      page: pageNumber,
      pageSize: pageSize,
      total: totalCount,
    };
  }

  async getDictionary(teamId?: string) {
    const list = await this.prisma.player.findMany({
      where: {
        teamId,
      },
      select: {
        id: true,
        name: true,
      },
    });
    return list.map((el) => ({ label: el.name, value: el.id }));
  }

  findAll() {
    return this.prisma.player.findMany();
  }

  async findOne(id: string) {
    const player = await this.prisma.player.findUnique({
      where: {
        id,
      },
      include: {
        team: true,
      },
    });

    const matches = await this.prisma.match.findMany({
      where: {
        matchApplications: {
          some: {
            players: {
              some: {
                id: player.id,
              },
            },
          },
        },
      },
      include: {
        matchTimeline: {
          where: {
            playerId: player.id,
            type: 'GOAL',
          },
        },
      },
    });

    const goals = matches.reduce(
      (accumulator, currentMatch) =>
        accumulator + currentMatch.matchTimeline.length,
      0,
    );

    const results = { matches: matches.length, goals };

    return { ...player, results };
  }

  update(id: string, updatePlayerDto: UpdatePlayerDto) {
    return `This action updates a #${id} player`;
  }

  remove(id: string) {
    return `This action removes a #${id} player`;
  }
}
