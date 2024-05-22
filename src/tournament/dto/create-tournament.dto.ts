import { MatchType, TournamentType } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateTournamentDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEnum(MatchType)
  matchType: MatchType;

  @IsEnum(TournamentType)
  tournamentType: TournamentType;
}
