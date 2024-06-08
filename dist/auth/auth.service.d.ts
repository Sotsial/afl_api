import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { PlayerService } from 'src/player/player.service';
export declare class AuthService {
    private usersService;
    private playersService;
    private jwtService;
    constructor(usersService: UserService, playersService: PlayerService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<any>;
    login(user: User): Promise<{
        access_token: string;
    }>;
}
