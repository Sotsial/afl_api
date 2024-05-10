import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { PrismaService } from '../prisma.service';
import { UpdateMatchApplicationDto } from './dto/update-match-application.dto';
import { CreateMatchEventDto } from './dto/create-match-event-dto';
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
        time: number;
        half: number;
        mainReferee: string;
        firstReferee: string;
        secondReferee: string;
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
            time: number;
            half: number;
            mainReferee: string;
            firstReferee: string;
            secondReferee: string;
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
        time: number;
        half: number;
        mainReferee: string;
        firstReferee: string;
        secondReferee: string;
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
            color: string;
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
        time: number;
        half: number;
        mainReferee: string;
        firstReferee: string;
        secondReferee: string;
    }>;
    update(id: string, updateMatchDto: UpdateMatchDto): Promise<{
        message: string;
    }>;
    updateApplication(UpdateMatchApplicationDto: UpdateMatchApplicationDto): Promise<{
        message: string;
    }>;
    updateStage(id: string): Promise<void | {
        message: string;
    }>;
    preparingMatch(id: string): Promise<void>;
    halfTimeMatch(id: string, status: 'start' | 'end'): Promise<{
        message: string;
    }>;
    startMatch(id: string): Promise<{
        message: string;
    }>;
    updateTime(): Promise<import(".prisma/client").Prisma.BatchPayload>;
    changeTime(id: string, time: number): Promise<{
        id: string;
        status: import(".prisma/client").$Enums.MatchStatus;
        date: Date;
        winnerId: string;
        place: string;
        tournamentId: string;
        round: number;
        time: number;
        half: number;
        mainReferee: string;
        firstReferee: string;
        secondReferee: string;
    }>;
    endMatch(id: string): Promise<{
        message: string;
    }>;
    createMatchEvent({ teamId, matchId, playerId, half, time, type, }: CreateMatchEventDto): Promise<{
        id: string;
        time: number;
        type: import(".prisma/client").$Enums.MatchEvent;
        teamId: string;
        matchId: string;
        playerId: string;
        half: number;
    }>;
    findMatchEvents(id: string): Promise<({
        player: {
            user: {
                name: string;
            };
        };
    } & {
        id: string;
        time: number;
        type: import(".prisma/client").$Enums.MatchEvent;
        teamId: string;
        matchId: string;
        playerId: string;
        half: number;
    })[]>;
}
