import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { PrismaService } from '../prisma.service';
import { UpdateMatchApplicationDto } from './dto/update-match-application.dto';
export declare class MatchService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createMatchDto: CreateMatchDto): Promise<{
        id: string;
        status: import(".prisma/client").$Enums.MatchStatus;
        date: Date;
        winnerId: string;
        place: string;
        tournamentId: string;
        round: number;
    }>;
    createMany({ matches, tournamentId, }: {
        matches: {
            teams: string[];
            round: number;
        }[];
        tournamentId: string;
    }): Promise<void>;
    findList(query: {
        current: number;
        pageSize: number;
        userId?: string;
    }): Promise<{
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
    findAll({ limit, status, teamId, playerId, }: {
        limit?: number;
        status?: string;
        teamId?: string;
        playerId?: string;
    }): Promise<({
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
    update(id: string, updateTeamDto: UpdateMatchDto): Promise<{
        message: string;
    }>;
    updateApplication(UpdateMatchApplicationDto: UpdateMatchApplicationDto): Promise<{
        message: string;
    }>;
    updateStage(id: string): Promise<void | {
        message: string;
    }>;
    preparingMatch(id: string): Promise<void>;
    startMatch(id: string): Promise<{
        message: string;
    }>;
    endMatch(id: string): Promise<{
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
    findMatchEvents(id: string): Promise<({
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
}
