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
    findList(query: any): Promise<{
        data: {
            id: string;
            name: string;
            status: import(".prisma/client").$Enums.TournamentStatus;
        }[];
        page: number;
        pageSize: number;
        total: number;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        name: string;
        status: import(".prisma/client").$Enums.TournamentStatus;
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
    }>;
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
    }[]>;
    update(id: string, updateTournamentDto: UpdateTournamentDto): import(".prisma/client").Prisma.Prisma__TournamentClient<{
        id: string;
        name: string;
        status: import(".prisma/client").$Enums.TournamentStatus;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): string;
    createApplication(tournamentApplicationDto: CreateTournamentApplicationDto): Promise<{
        id: string;
        teamId: string;
        tournamentId: string;
        date: Date;
    }>;
    createTours({ tournamentId }: createTournamentTours): Promise<{
        message: string;
    }>;
}
