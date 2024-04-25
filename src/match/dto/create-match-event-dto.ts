import { MatchEvent } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsString, Max, Min } from 'class-validator';

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
