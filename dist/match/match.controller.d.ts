import { MatchService } from './match.service';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { UpdateMatchApplicationDto } from './dto/update-match-application.dto';
import { CreateMatchEventDto } from './dto/create-match-event-dto';
export declare class MatchController {
    private readonly matchService;
    constructor(matchService: MatchService);
    create(createMatchDto: CreateMatchDto): Promise<{
        teams: {
            id: string;
            name: string;
        }[];
    } & {
        id: string;
        status: import(".prisma/client").$Enums.MatchStatus;
        date: Date;
        tournamentId: string;
        winnerId: string;
    }>;
    findList(req: any, query: any): Promise<{
        data: ({
            tournament: {
                id: string;
                name: string;
                status: import(".prisma/client").$Enums.TournamentStatus;
            };
            teams: {
                id: string;
                name: string;
            }[];
        } & {
            id: string;
            status: import(".prisma/client").$Enums.MatchStatus;
            date: Date;
            tournamentId: string;
            winnerId: string;
        })[];
        page: number;
        pageSize: number;
        total: number;
    }>;
    findOne(id: string): Promise<{
        matchTimeline: {
            id: string;
            time: number;
            type: import(".prisma/client").$Enums.MatchEvent;
            teamId: string;
            matchId: string;
            playerId: string;
        }[];
        matchApplications: ({
            team: {
                id: string;
                name: string;
            };
            players: {
                id: string;
                name: string;
                userId: string;
                teamId: string;
                isCaptain: boolean;
            }[];
        } & {
            id: string;
            teamId: string;
            matchID: string;
        })[];
        teams: {
            id: string;
            name: string;
        }[];
    } & {
        id: string;
        status: import(".prisma/client").$Enums.MatchStatus;
        date: Date;
        tournamentId: string;
        winnerId: string;
    }>;
    findAll(dto: any): Promise<({
        matchTimeline: {
            teamId: string;
        }[];
        teams: {
            id: string;
            name: string;
        }[];
    } & {
        id: string;
        status: import(".prisma/client").$Enums.MatchStatus;
        date: Date;
        tournamentId: string;
        winnerId: string;
    })[]>;
    updateApplication(UpdateMatchApplicationDto: UpdateMatchApplicationDto): Promise<{
        message: string;
    }>;
    updateStage(id: any): Promise<{
        message: string;
    }>;
    createMatchEvent(CreateMatchEventDto: CreateMatchEventDto): Promise<{
        id: string;
        time: number;
        type: import(".prisma/client").$Enums.MatchEvent;
        teamId: string;
        matchId: string;
        playerId: string;
    }>;
    findMatchEvents(matchId: string): Promise<({
        player: {
            id: string;
            name: string;
            userId: string;
            teamId: string;
            isCaptain: boolean;
        };
    } & {
        id: string;
        time: number;
        type: import(".prisma/client").$Enums.MatchEvent;
        teamId: string;
        matchId: string;
        playerId: string;
    })[]>;
    update(id: string, updateMatchDto: UpdateMatchDto): import(".prisma/client").Prisma.Prisma__MatchClient<{
        id: string;
        status: import(".prisma/client").$Enums.MatchStatus;
        date: Date;
        tournamentId: string;
        winnerId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): string;
}
