import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<{
        id: string;
        email: string;
        name: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
    findOne(email: string): Promise<{
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
