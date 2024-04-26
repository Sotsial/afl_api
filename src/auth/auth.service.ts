import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { Player, User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email);

    if (!user) throw new BadRequestException('Неверный логин или пароль');

    const passwordMatch = await argon2.verify(user?.password, pass);

    if (user && passwordMatch) {
      return user;
    }
    throw new BadRequestException('Неверный логин или пароль');
  }

  async login(user: User & { player: Player }) {
    const { email, id, role, name, player } = user;
    return {
      access_token: this.jwtService.sign({
        id,
        email,
        role,
        name,
        teamId: player?.teamId,
      }),
    };
  }
}
