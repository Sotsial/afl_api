import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { PlayerService } from 'src/player/player.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private playersService: PlayerService,
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

  async login(user: User) {
    const { email, id, role, name, teamId } = user;

    let isCapitan = false;

    if (role === 'PLAYER' && teamId) {
      const { captainedTeam } = await this.playersService.findOne(user.id);

      isCapitan = !!captainedTeam;
    }

    return {
      access_token: this.jwtService.sign({
        id,
        email,
        role,
        name,
        teamId,
        isCapitan,
      }),
    };
  }
}
