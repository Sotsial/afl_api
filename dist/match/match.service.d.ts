import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { PrismaService } from '../prisma.service';
import { CreateMatchApplicationDto } from './dto/create-match-application.dto';
import { UpdateMatchApplicationDto } from './dto/update-match-application.dto';
export declare class MatchService {
    private prisma;
    constructor(prisma: PrismaService);
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
        place: string;
    }>;
    findList(query: {
        current: number;
        pageSize: number;
        userId: string;
    }): Promise<{
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
            place: string;
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
        tournamentId: string;
        winnerId: string;
        place: string;
    })[]>;
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
        place: string;
    }>;
    update(id: string, updateTeamDto: UpdateMatchDto): Promise<{
        message: string;
    }>;
    updateApplication(UpdateMatchApplicationDto: UpdateMatchApplicationDto): Promise<{
        message: string;
    }>;
    createApplication(CreateMatchApplicationDto: CreateMatchApplicationDto): Promise<{
        id: string;
        teamId: string;
        matchID: string;
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
    remove(id: string): string;
}
