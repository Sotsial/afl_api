import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { PrismaService } from '../prisma.service';
import { CreateTournamentApplicationDto } from './dto/create-tournament-application.dto';
import { GroupService } from 'src/group/group.service';
import { UserService } from 'src/user/user.service';
import { MatchService } from 'src/match/match.service';
export declare class TournamentService {
    private prisma;
    private groupService;
    private userService;
    private matchService;
    constructor(prisma: PrismaService, groupService: GroupService, userService: UserService, matchService: MatchService);
    create(data: CreateTournamentDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        startDate: Date;
        endDate: Date;
        teamCount: number;
        groupCount: number;
        winnerGroupCount: number;
        bestOfTheRest: number;
        tournamentType: import(".prisma/client").$Enums.TournamentType;
        status: import(".prisma/client").$Enums.TournamentStatus;
        matchType: import(".prisma/client").$Enums.MatchType;
        winnerId: string;
    }>;
    findList(query: {
        current: number;
        pageSize: number;
    }): Promise<{
        data: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            startDate: Date;
            endDate: Date;
            teamCount: number;
            groupCount: number;
            winnerGroupCount: number;
            bestOfTheRest: number;
            tournamentType: import(".prisma/client").$Enums.TournamentType;
            status: import(".prisma/client").$Enums.TournamentStatus;
            matchType: import(".prisma/client").$Enums.MatchType;
            winnerId: string;
        }[];
        page: number;
        pageSize: number;
        total: number;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        winner: {
            name: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        startDate: Date;
        endDate: Date;
        teamCount: number;
        groupCount: number;
        winnerGroupCount: number;
        bestOfTheRest: number;
        tournamentType: import(".prisma/client").$Enums.TournamentType;
        status: import(".prisma/client").$Enums.TournamentStatus;
        matchType: import(".prisma/client").$Enums.MatchType;
        winnerId: string;
    })[]>;
    getDictionary(): Promise<{
        label: string;
        value: string;
        type: import(".prisma/client").$Enums.TournamentType;
    }[]>;
    findOne(id: string): Promise<{
        teamIds: string[];
        teams: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            capitanId: string;
        }[];
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        startDate: Date;
        endDate: Date;
        teamCount: number;
        groupCount: number;
        winnerGroupCount: number;
        bestOfTheRest: number;
        tournamentType: import(".prisma/client").$Enums.TournamentType;
        status: import(".prisma/client").$Enums.TournamentStatus;
        matchType: import(".prisma/client").$Enums.MatchType;
        winnerId: string;
    }>;
    update(id: string, { teamIds, ...data }: UpdateTournamentDto): import(".prisma/client").Prisma.Prisma__TournamentClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        startDate: Date;
        endDate: Date;
        teamCount: number;
        groupCount: number;
        winnerGroupCount: number;
        bestOfTheRest: number;
        tournamentType: import(".prisma/client").$Enums.TournamentType;
        status: import(".prisma/client").$Enums.TournamentStatus;
        matchType: import(".prisma/client").$Enums.MatchType;
        winnerId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    getTable(id: string): Promise<{
        group: {
            liveMatch: string;
            scored: number;
            conceded: number;
            difference: number;
            matches: any;
            wins: number;
            draws: number;
            losses: number;
            points: number;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            capitanId: string;
        }[][];
        playoff?: undefined;
    } | {
        group: {
            liveMatch: string;
            scored: number;
            conceded: number;
            difference: number;
            matches: any;
            wins: number;
            draws: number;
            losses: number;
            points: number;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            capitanId: string;
        }[][];
        playoff: {
            date: Date;
            round: number;
            step: number;
            teams: {
                name: string;
            }[];
        }[];
    }>;
    getApplications({ tournamentId, teamId, }: {
        tournamentId: string;
        teamId?: string;
    }): Promise<({
        team: {
            name: string;
        };
        players: {
            id: string;
            email: string;
            name: string;
            password: string;
            role: import(".prisma/client").$Enums.Role;
            teamId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        teamId: string;
        tournamentId: string;
    })[]>;
    createApplication({ playerIds, teamId, tournamentId, }: CreateTournamentApplicationDto): Promise<{
        message: string;
    }>;
    updateApplication({ playerIds, id, }: {
        playerIds: string[];
        id: string;
    }): Promise<{
        message: string;
    }>;
    createTours(tournamentId: string): Promise<{
        message: string;
    }>;
    updateStage(id: string): Promise<void>;
    tournamentEnd(id: any, winnerId: any): Promise<void>;
}
