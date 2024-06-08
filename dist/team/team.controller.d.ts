import { TeamService } from './team.service';
import { CreateTeamDto } from './dto/create-team.dto';
export declare class TeamController {
    private readonly teamService;
    constructor(teamService: TeamService);
    create(createTeamDto: CreateTeamDto): Promise<{
        message: string;
    }>;
    findList(query: any): Promise<{
        data: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            capitanId: string;
        }[];
        page: number;
        pageSize: number;
        total: number;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        capitanId: string;
    }[]>;
    getDictionary(query: any): Promise<{
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
            createdAt: Date;
            updatedAt: Date;
            type: import(".prisma/client").$Enums.MatchType;
            date: Date;
            place: string;
            mainReferee: string;
            firstReferee: string;
            secondReferee: string;
            status: import(".prisma/client").$Enums.MatchStatus;
            time: number;
            half: number;
            groupId: string;
            round: number;
            step: number;
            tournamentId: string;
            winnerId: string;
        }[];
        players: {
            id: string;
            email: string;
            name: string;
            password: string;
            role: import(".prisma/client").$Enums.Role;
            teamId: string;
        }[];
        capitan: {
            name: string;
        };
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        capitanId: string;
    }>;
    update(id: string, updateTeamDto: any): Promise<{
        message: string;
    }>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__TeamClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        capitanId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
