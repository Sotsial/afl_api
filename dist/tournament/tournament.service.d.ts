import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { PrismaService } from 'src/prisma.service';
import { CreateTournamentApplicationDto } from './dto/create-tournament-application.dto';
import { MatchService } from 'src/match/match.service';
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
    update(id: string, updateTournamentDto: UpdateTournamentDto): import(".prisma/client").Prisma.Prisma__TournamentClient<{
        id: string;
        name: string;
        status: import(".prisma/client").$Enums.TournamentStatus;
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
    }[]>;
    remove(id: string): string;
    createApplication(tournamentApplicationDto: CreateTournamentApplicationDto): Promise<{
        id: string;
        teamId: string;
        tournamentId: string;
        date: Date;
    }>;
    createTours(tournamentId: string): Promise<{
        message: string;
    }>;
}
