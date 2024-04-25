import { ArrayNotEmpty, IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateMatchApplicationDto {
  @IsNotEmpty()
  @IsString()
  matchId: string;

  @IsNotEmpty()
  @IsString()
  teamId: string;

  @IsArray()
  @ArrayNotEmpty()
  playerIds: string[];
}
