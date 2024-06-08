import { MatchService } from './match.service';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { UpdateMatchApplicationDto } from './dto/update-match-application.dto';
import { CreateMatchEventDto } from './dto/create-match-event-dto';
export declare class MatchController {
    private readonly matchService;
    constructor(matchService: MatchService);
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
    findList(req: any, query: any): Promise<{
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
    findAll(dto: any): Promise<({
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
    updateApplication(updateMatchApplicationDto: UpdateMatchApplicationDto): Promise<{
        message: string;
    }>;
    updateStage(id: any): Promise<void | {
        message: string;
    }>;
    createMatchEvent(createMatchEventDto: CreateMatchEventDto): Promise<{
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
    findMatchEvents(matchId: string): Promise<({
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
    update(id: string, updateMatchDto: UpdateMatchDto): Promise<{
        message: string;
    }>;
    changeTime(id: string, time: any): Promise<{
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
    autoPlay(id: string): Promise<void>;
}
