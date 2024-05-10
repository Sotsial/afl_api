import { TournamentService } from './tournament.service';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { CreateTournamentApplicationDto, createTournamentTours } from './dto/create-tournament-application.dto';
export declare class TournamentController {
    private readonly tournamentService;
    constructor(tournamentService: TournamentService);
    create(createTournamentDto: CreateTournamentDto): Promise<{
        message: string;
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
            userId: string;
            teamId: string;
        }[];
    } & {
        id: string;
        teamId: string;
        tournamentId: string;
    })[]>;
    createTours({ tournamentId }: createTournamentTours): Promise<any>;
    findList(query: any): Promise<{
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
    getTable(id: string): Promise<{
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
        name: string;
        capitanId: string;
    }[]>;
    update(id: string, updateTournamentDto: UpdateTournamentDto): import(".prisma/client").Prisma.Prisma__TournamentClient<{
        id: string;
        name: string;
        status: import(".prisma/client").$Enums.TournamentStatus;
        startDate: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
