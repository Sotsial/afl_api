import { MatchType, TournamentType } from '@prisma/client';
import { IsDateString, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateTournamentDto {
  @IsDateString()
  date: Date;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEnum(MatchType)
  matchType: MatchType;

  @IsEnum(TournamentType)
  tournamentType: TournamentType;
}
