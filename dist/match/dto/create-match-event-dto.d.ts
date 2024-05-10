import { MatchEvent } from '@prisma/client';
export declare class CreateMatchEventDto {
    time: number;
    type: MatchEvent;
    teamId: string;
    matchId: string;
    playerId: string;
    half: number;
}
