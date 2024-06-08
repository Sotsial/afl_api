import { TournamentService } from './tournament.service';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { CreateTournamentApplicationDto, createTournamentTours } from './dto/create-tournament-application.dto';
export declare class TournamentController {
    private readonly tournamentService;
    constructor(tournamentService: TournamentService);
    create(createTournamentDto: CreateTournamentDto): Promise<{
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
    createApplication(tournamentApplicationDto: CreateTournamentApplicationDto): Promise<{
        message: string;
    }>;
    updateApplication(id: string, { playerIds }: {
        playerIds: any;
    }): Promise<{
        message: string;
    }>;
    getApplications(query: any): Promise<({
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
    createTours({ tournamentId }: createTournamentTours): Promise<{
        message: string;
    }>;
    findList(query: any): Promise<{
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
    update(id: string, updateTournamentDto: UpdateTournamentDto): import(".prisma/client").Prisma.Prisma__TournamentClient<{
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
}
