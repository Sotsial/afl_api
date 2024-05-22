import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma.service';
import * as argon2 from 'argon2';

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
      include: { player: true },
    });
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
