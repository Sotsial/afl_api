import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { Player, User } from '@prisma/client';
import { PlayerService } from 'src/player/player.service';
export declare class AuthService {
    private usersService;
    private playersService;
    private jwtService;
    constructor(usersService: UserService, playersService: PlayerService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<any>;
    login(user: User & {
        player: Player;
    }): Promise<{
        access_token: string;
    }>;
}
