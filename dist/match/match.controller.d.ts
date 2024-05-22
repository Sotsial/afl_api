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
    findList(req: any, query: any): Promise<{
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
    updateApplication(updateMatchApplicationDto: UpdateMatchApplicationDto): Promise<{
        message: string;
    }>;
    updateStage(id: any): Promise<void | {
        message: string;
    }>;
    createMatchEvent(createMatchEventDto: CreateMatchEventDto): Promise<{
        id: string;
        time: number;
        type: import(".prisma/client").$Enums.MatchEvent;
        teamId: string;
        matchId: string;
        playerId: string;
        half: number;
    }>;
    findMatchEvents(matchId: string): Promise<({
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
    update(id: string, updateMatchDto: UpdateMatchDto): Promise<{
        message: string;
    }>;
    changeTime(id: string, time: any): Promise<{
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
}
