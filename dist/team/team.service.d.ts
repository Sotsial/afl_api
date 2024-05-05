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
            capitanId: string;
        }[];
        page: number;
        pageSize: number;
        total: number;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        name: string;
        capitanId: string;
    }[]>;
    getDictionary({ tournamentApplicationId, }: {
        tournamentApplicationId?: string;
    }): Promise<{
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
            winnerId: string;
            place: string;
            tournamentId: string;
            round: number;
        }[];
        players: ({
            user: {
                id: string;
                email: string;
                name: string;
                password: string;
                role: import(".prisma/client").$Enums.Role;
            };
        } & {
            id: string;
            userId: string;
            teamId: string;
        })[];
        capitan: {
            user: {
                name: string;
            };
        };
        id: string;
        name: string;
        capitanId: string;
    }>;
    update(id: string, updateTeamDto: UpdateTeamDto): Promise<{
        message: string;
    }>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__TeamClient<{
        id: string;
        name: string;
        capitanId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
