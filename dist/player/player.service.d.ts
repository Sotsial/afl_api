import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { PrismaService } from '../prisma.service';
import { UserService } from '../user/user.service';
export declare class PlayerService {
    private prisma;
    private userService;
    constructor(prisma: PrismaService, userService: UserService);
    create({ name, teamId, email, password }: CreatePlayerDto): Promise<{
        message: string;
    }>;
    findList(query: {
        current: number;
        pageSize: number;
    }): Promise<{
        data: ({
            team: {
                id: string;
                name: string;
            };
        } & {
            id: string;
            name: string;
            userId: string;
            teamId: string;
            isCaptain: boolean;
        })[];
        page: number;
        pageSize: number;
        total: number;
    }>;
    getDictionary(teamId?: string): Promise<{
        label: string;
        value: string;
    }[]>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        name: string;
        userId: string;
        teamId: string;
        isCaptain: boolean;
    }[]>;
    findOne(id: string): Promise<{
        results: {
            matches: number;
            goals: number;
        };
        user: {
            id: string;
            email: string;
            name: string;
            password: string;
            role: import(".prisma/client").$Enums.Role;
        };
        team: {
            id: string;
            name: string;
        };
        id: string;
        name: string;
        userId: string;
        teamId: string;
        isCaptain: boolean;
    }>;
    update(id: string, updatePlayerDto: UpdatePlayerDto): Promise<{
        message: string;
    }>;
    remove(id: string): string;
}
