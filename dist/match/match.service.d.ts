import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { PrismaService } from 'src/prisma.service';
import { CreateMatchApplicationDto } from './dto/create-match-application.dto';
import { UpdateMatchApplicationDto } from './dto/update-match-application.dto';
import { CreateMatchEventDto } from './dto/create-match-event-dto';
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
    }>;
    update(id: string, updateTeamDto: UpdateMatchDto): import(".prisma/client").Prisma.Prisma__MatchClient<{
        id: string;
        status: import(".prisma/client").$Enums.MatchStatus;
        date: Date;
        tournamentId: string;
        winnerId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    updateApplication(UpdateMatchApplicationDto: UpdateMatchApplicationDto): Promise<{
        message: string;
    }>;
    createApplication(CreateMatchApplicationDto: CreateMatchApplicationDto): Promise<{
        id: string;
        teamId: string;
        matchID: string;
    }>;
    updateStage(id: string): Promise<{
        message: string;
    }>;
    startMatch(id: string): Promise<{
        message: string;
    }>;
    endMatch(id: string): Promise<{
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
