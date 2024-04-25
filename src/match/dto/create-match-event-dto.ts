import { IsEnum, IsNotEmpty, IsString, Max, Min } from 'class-validator';

export enum MatchEvent {
  GOAL = 'GOAL',
  YELLOW_CARD = 'YELLOW_CARD',
  RED_CARD = 'RED_CARD',
  // ... другие типы событий
}

export class CreateMatchEventDto {
  @IsNotEmpty()
  @Min(1)
  @Max(90)
  time: number;

  @IsNotEmpty()
  @IsEnum(MatchEvent)
  type: MatchEvent;

  @IsNotEmpty()
  @IsString()
  teamId: string;

  @IsNotEmpty()
  @IsString()
  matchId: string;

  @IsNotEmpty()
  @IsString()
  playerId: string;
}
