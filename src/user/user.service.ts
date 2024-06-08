import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma.service';
import * as argon2 from 'argon2';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const password = await argon2.hash(createUserDto.password);

    return await this.prisma.user.create({
      data: { ...createUserDto, password },
    });
  }

  async findOne(email: string) {
    return await this.prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });
  }

  async findAll({ where }: { where?: Prisma.UserWhereInput }) {
    return this.prisma.user.findMany({ where });
  }

  async findList(
    query: {
      current: number;
      pageSize: number;
    },
    where: Prisma.UserWhereInput,
  ) {
    const { pageSize = 10, current = 1 } = query;
    const pageNumber = Math.max(1, current);
    const skip = (pageNumber - 1) * pageSize;
    const take = +pageSize;

    const results = await this.prisma.user.findMany({
      take,
      skip,
      where,
    });
    const totalCount = await this.prisma.user.count();

    return {
      data: results,
      page: pageNumber,
      pageSize,
      total: totalCount,
    };
  }

  async getDictionary(where: Prisma.UserWhereInput) {
    const list = await this.prisma.user.findMany({
      where,
      select: {
        id: true,
        name: true,
      },
    });
    return list.map((el) => ({ label: el.name, value: el.id }));
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }
}
