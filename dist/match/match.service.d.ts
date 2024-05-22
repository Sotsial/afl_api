import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { PrismaService } from '../prisma.service';
import { UpdateMatchApplicationDto } from './dto/update-match-application.dto';
import { MatchType } from '@prisma/client';
import { CreateMatchEventDto } from './dto/create-match-event-dto';
import { EventEmitter2 } from '@nestjs/event-emitter';
export declare class MatchService {
    private prisma;
    private eventEmitter;
    constructor(prisma: PrismaService, eventEmitter: EventEmitter2);
    create(createMatchDto: CreateMatchDto): Promise<{
        id: string;
        type: import(".prisma/client").$Enums.MatchType;
        status: import(".prisma/client").$Enums.MatchStatus;
        groupId: string;
        tournamentId: string;
        date: Date;
        winnerId: string;
        place: string;
        round: number;
        step: number;
        time: number;
        half: number;
        mainReferee: string;
        firstReferee: string;
        secondReferee: string;
    }>;
    createMany({ matches, groupId, tournamentId, type, }: {
        matches: {
            teamIds: string[];
            round: number;
            step?: number;
        }[];
        groupId?: string;
        tournamentId: string;
        type: MatchType;
    }): Promise<void>;
    findList(query: {
        current: number;
        pageSize: number;
        userId?: string;
    }): Promise<{
        data: ({
            tournament: {
                name: string;
            };
            group: {
                tournament: {
                    id: string;
                    name: string;
                    matchType: import(".prisma/client").$Enums.MatchType;
                    tournamentType: import(".prisma/client").$Enums.TournamentType;
                    status: import(".prisma/client").$Enums.TournamentStatus;
                    winnerId: string;
                    startDate: Date;
                };
            };
            teams: {
                id: string;
                name: string;
                capitanId: string;
            }[];
        } & {
            id: string;
            type: import(".prisma/client").$Enums.MatchType;
            status: import(".prisma/client").$Enums.MatchStatus;
            groupId: string;
            tournamentId: string;
            date: Date;
            winnerId: string;
            place: string;
            round: number;
            step: number;
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
            name: string;
            id: string;
        }[];
    } & {
        id: string;
        type: import(".prisma/client").$Enums.MatchType;
        status: import(".prisma/client").$Enums.MatchStatus;
        groupId: string;
        tournamentId: string;
        date: Date;
        winnerId: string;
        place: string;
        round: number;
        step: number;
        time: number;
        half: number;
        mainReferee: string;
        firstReferee: string;
        secondReferee: string;
    })[]>;
    findOne(id: string): Promise<{
        matchTimeline: {
            teamId: string;
        }[];
        matchApplications: ({
            team: {
                name: string;
                id: string;
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
        teams: {
            name: string;
            id: string;
        }[];
    } & {
        id: string;
        type: import(".prisma/client").$Enums.MatchType;
        status: import(".prisma/client").$Enums.MatchStatus;
        groupId: string;
        tournamentId: string;
        date: Date;
        winnerId: string;
        place: string;
        round: number;
        step: number;
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
        type: import(".prisma/client").$Enums.MatchType;
        status: import(".prisma/client").$Enums.MatchStatus;
        groupId: string;
        tournamentId: string;
        date: Date;
        winnerId: string;
        place: string;
        round: number;
        step: number;
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
