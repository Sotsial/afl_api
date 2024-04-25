import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TeamService {
  constructor(private prisma: PrismaService) {}

  async create(createTeamDto: CreateTeamDto) {
    const team = await this.prisma.team.create({ data: createTeamDto });

    return { message: `Команда ${team.name}  создан` };
  }

  async findList(query: { current: number; pageSize: number }) {
    const pageSize = Number(query.pageSize) ?? 10;
    const pageNumber = Number(query.current) ?? 10;

    const results = await this.prisma.team.findMany({
      take: pageSize,
      skip: (pageNumber - 1) * pageSize,
    });

    const totalCount = await this.prisma.team.count();

    return {
      data: results,
      page: pageNumber,
      pageSize: pageSize,
      total: totalCount,
    };
  }

  findAll() {
    return this.prisma.team.findMany();
  }

  async getDictionary() {
    const list = await this.prisma.team.findMany({
      select: {
        id: true,
        name: true,
      },
    });
    return list.map((el) => ({ label: el.name, value: el.id }));
  }

  async findOne(id: string) {
    const team = await this.prisma.team.findUnique({
      where: { id },
      include: { players: true, match: { where: { status: 'Completed' } } },
    });

    const mathes = await this.prisma.match.findMany({
      where: { teams: { some: { id: team.id } }, status: 'Completed' },
    });

    function countResults(matches, teamId) {
      let wins = 0;
      let draws = 0;
      let losses = 0;

      for (const match of matches) {
        if (match.winnerId === teamId) {
          wins++;
        } else if (match.winnerId === null) {
          draws++;
        } else {
          losses++;
        }
      }

      // Return an object with all the counts and points
      return {
        matches: matches.length,
        wins: wins,
        draws: draws,
        losses: losses,
      };
    }

    const results = countResults(mathes, team.id);

    if (!team) throw new NotFoundException('Team not found');

    return { ...team, results };
  }

  update(id: string, updateTeamDto: UpdateTeamDto) {
    return this.prisma.team.update({
      where: {
        id,
      },
      data: updateTeamDto,
    });
  }

  remove(id: string) {
    return this.prisma.team.delete({
      where: { id },
    });
  }
}
