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
            type: import(".prisma/client").$Enums.MatchType;
            status: import(".prisma/client").$Enums.MatchStatus;
            groupId: string;
            tournamentId: string;
            date: Date;
            winnerId: string;
            place: string;
            round: number;
            step: number;
            time: number;
            half: number;
            mainReferee: string;
            firstReferee: string;
            secondReferee: string;
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
