import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<{
        id: string;
        email: string;
        name: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
        teamId: string;
    }>;
    findOne(email: string): Promise<{
        id: string;
        email: string;
        name: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
        teamId: string;
    }>;
    findAll({ where }: {
        where?: Prisma.UserWhereInput;
    }): Promise<{
        id: string;
        email: string;
        name: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
        teamId: string;
    }[]>;
    findList(query: {
        current: number;
        pageSize: number;
    }, where: Prisma.UserWhereInput): Promise<{
        data: {
            id: string;
            email: string;
            name: string;
            password: string;
            role: import(".prisma/client").$Enums.Role;
            teamId: string;
        }[];
        page: number;
        pageSize: number;
        total: number;
    }>;
    getDictionary(where: Prisma.UserWhereInput): Promise<{
        label: string;
        value: string;
    }[]>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        id: string;
        email: string;
        name: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
        teamId: string;
    }>;
}
