import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { Player, User } from '@prisma/client';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UserService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<any>;
    login(user: User & {
        player: Player;
    }): Promise<{
        access_token: string;
    }>;
}
