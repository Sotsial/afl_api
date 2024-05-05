import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<{
        id: string;
        email: string;
        name: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
    findOne(id: string): Promise<{
        player: {
            id: string;
            userId: string;
            teamId: string;
        };
    } & {
        id: string;
        email: string;
        name: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        id: string;
        email: string;
        name: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
}
