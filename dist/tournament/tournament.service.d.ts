import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { PrismaService } from '../prisma.service';
import { CreateTournamentApplicationDto } from './dto/create-tournament-application.dto';
import { MatchService } from '../match/match.service';
export declare class TournamentService {
    private prisma;
    private matchService;
    constructor(prisma: PrismaService, matchService: MatchService);
    create(createTournamentDto: CreateTournamentDto): Promise<{
        message: string;
    }>;
    findList(query: {
        current: number;
        pageSize: number;
    }): Promise<{
        data: {
            id: string;
            name: string;
            status: import(".prisma/client").$Enums.TournamentStatus;
            startDate: Date;
        }[];
        page: number;
        pageSize: number;
        total: number;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        name: string;
        status: import(".prisma/client").$Enums.TournamentStatus;
        startDate: Date;
    }[]>;
    getDictionary(): Promise<{
        label: string;
        value: string;
    }[]>;
    findOne(id: string): Promise<{
        teamIds: string[];
        id: string;
        name: string;
        status: import(".prisma/client").$Enums.TournamentStatus;
        startDate: Date;
    }>;
    update(id: string, updateTournamentDto: UpdateTournamentDto): import(".prisma/client").Prisma.Prisma__TournamentClient<{
        id: string;
        name: string;
        status: import(".prisma/client").$Enums.TournamentStatus;
        startDate: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    getTable(id: string): Promise<{
        scored: number;
        conceded: number;
        difference: number;
        matches: any;
        wins: number;
        draws: number;
        losses: number;
        points: number;
        id: string;
        name: string;
        capitanId: string;
    }[]>;
    getApplications({ tournamentId, teamId, }: {
        tournamentId: string;
        teamId?: string;
    }): Promise<({
        team: {
            name: string;
        };
        players: {
            id: string;
            userId: string;
            teamId: string;
        }[];
    } & {
        id: string;
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
    createTours(tournamentId: string): Promise<any>;
}
