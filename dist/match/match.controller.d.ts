import { MatchService } from './match.service';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { UpdateMatchApplicationDto } from './dto/update-match-application.dto';
export declare class MatchController {
    private readonly matchService;
    constructor(matchService: MatchService);
    create(createMatchDto: CreateMatchDto): Promise<{
        id: string;
        status: import(".prisma/client").$Enums.MatchStatus;
        date: Date;
        winnerId: string;
        place: string;
        tournamentId: string;
        round: number;
    }>;
    findList(req: any, query: any): Promise<{
        data: ({
            tournament: {
                id: string;
                name: string;
                status: import(".prisma/client").$Enums.TournamentStatus;
                startDate: Date;
            };
            teams: {
                id: string;
                name: string;
                capitanId: string;
            }[];
        } & {
            id: string;
            status: import(".prisma/client").$Enums.MatchStatus;
            date: Date;
            winnerId: string;
            place: string;
            tournamentId: string;
            round: number;
        })[];
        page: number;
        pageSize: number;
        total: number;
    }>;
    findOne(id: string): Promise<{
        matchApplications: ({
            team: {
                id: string;
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
            matchId: string;
        })[];
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
        winnerId: string;
        place: string;
        tournamentId: string;
        round: number;
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
        winnerId: string;
        place: string;
        tournamentId: string;
        round: number;
    })[]>;
    updateApplication(UpdateMatchApplicationDto: UpdateMatchApplicationDto): Promise<{
        message: string;
    }>;
    updateStage(id: any): Promise<void | {
        message: string;
    }>;
    createMatchEvent(CreateMatchEventDto: any): Promise<{
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
            userId: string;
            teamId: string;
        };
    } & {
        id: string;
        time: number;
        type: import(".prisma/client").$Enums.MatchEvent;
        teamId: string;
        matchId: string;
        playerId: string;
    })[]>;
    update(id: string, updateMatchDto: UpdateMatchDto): Promise<{
        message: string;
    }>;
}
