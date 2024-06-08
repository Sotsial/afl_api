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
        createdAt: Date;
        updatedAt: Date;
        type: import(".prisma/client").$Enums.MatchType;
        date: Date;
        place: string;
        mainReferee: string;
        firstReferee: string;
        secondReferee: string;
        status: import(".prisma/client").$Enums.MatchStatus;
        time: number;
        half: number;
        groupId: string;
        round: number;
        step: number;
        tournamentId: string;
        winnerId: string;
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
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    startDate: Date;
                    endDate: Date;
                    teamCount: number;
                    groupCount: number;
                    winnerGroupCount: number;
                    bestOfTheRest: number;
                    tournamentType: import(".prisma/client").$Enums.TournamentType;
                    status: import(".prisma/client").$Enums.TournamentStatus;
                    matchType: import(".prisma/client").$Enums.MatchType;
                    winnerId: string;
                };
            };
            teams: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                capitanId: string;
            }[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            type: import(".prisma/client").$Enums.MatchType;
            date: Date;
            place: string;
            mainReferee: string;
            firstReferee: string;
            secondReferee: string;
            status: import(".prisma/client").$Enums.MatchStatus;
            time: number;
            half: number;
            groupId: string;
            round: number;
            step: number;
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
            name: string;
            id: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: import(".prisma/client").$Enums.MatchType;
        date: Date;
        place: string;
        mainReferee: string;
        firstReferee: string;
        secondReferee: string;
        status: import(".prisma/client").$Enums.MatchStatus;
        time: number;
        half: number;
        groupId: string;
        round: number;
        step: number;
        tournamentId: string;
        winnerId: string;
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
                email: string;
                name: string;
                password: string;
                role: import(".prisma/client").$Enums.Role;
                teamId: string;
            }[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            color: string;
            teamId: string;
            matchId: string;
        })[];
        teams: {
            name: string;
            id: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: import(".prisma/client").$Enums.MatchType;
        date: Date;
        place: string;
        mainReferee: string;
        firstReferee: string;
        secondReferee: string;
        status: import(".prisma/client").$Enums.MatchStatus;
        time: number;
        half: number;
        groupId: string;
        round: number;
        step: number;
        tournamentId: string;
        winnerId: string;
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
        createdAt: Date;
        updatedAt: Date;
        type: import(".prisma/client").$Enums.MatchType;
        date: Date;
        place: string;
        mainReferee: string;
        firstReferee: string;
        secondReferee: string;
        status: import(".prisma/client").$Enums.MatchStatus;
        time: number;
        half: number;
        groupId: string;
        round: number;
        step: number;
        tournamentId: string;
        winnerId: string;
    }>;
    endMatch(id: string): Promise<{
        message: string;
    }>;
    createMatchEvent({ teamId, matchId, playerId, half, time, type, }: CreateMatchEventDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        time: number;
        type: import(".prisma/client").$Enums.MatchEvent;
        half: number;
        teamId: string;
        matchId: string;
        playerId: string;
    }>;
    findMatchEvents(id: string): Promise<({
        player: {
            name: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        time: number;
        type: import(".prisma/client").$Enums.MatchEvent;
        half: number;
        teamId: string;
        matchId: string;
        playerId: string;
    })[]>;
    autoPlayMatch(id: string): Promise<void>;
}
