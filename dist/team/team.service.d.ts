import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { PrismaService } from '../prisma.service';
export declare class TeamService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createTeamDto: CreateTeamDto): Promise<{
        message: string;
    }>;
    findList(query: {
        current: number;
        pageSize: number;
    }): Promise<{
        data: {
            id: string;
            name: string;
        }[];
        page: number;
        pageSize: number;
        total: number;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        name: string;
    }[]>;
    getDictionary(): Promise<{
        label: string;
        value: string;
    }[]>;
    findOne(id: string): Promise<{
        results: {
            matches: any;
            wins: number;
            draws: number;
            losses: number;
        };
        match: {
            id: string;
            status: import(".prisma/client").$Enums.MatchStatus;
            date: Date;
            tournamentId: string;
            winnerId: string;
            place: string;
        }[];
        players: {
            id: string;
            name: string;
            userId: string;
            teamId: string;
            isCaptain: boolean;
        }[];
        id: string;
        name: string;
    }>;
    update(id: string, updateTeamDto: UpdateTeamDto): import(".prisma/client").Prisma.Prisma__TeamClient<{
        id: string;
        name: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__TeamClient<{
        id: string;
        name: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
