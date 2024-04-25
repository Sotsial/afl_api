import { ArrayNotEmpty, IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateTournamentApplicationDto {
  @IsNotEmpty()
  @IsString()
  tournamentId: string;

  @IsNotEmpty()
  @IsString()
  teamId: string;

  @IsArray()
  @ArrayNotEmpty()
  playerIds: string[];
}

export class createTournamentTours {
  @IsNotEmpty()
  @IsString()
  tournamentId: string;
}
