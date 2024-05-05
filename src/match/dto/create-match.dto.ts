import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateMatchDto {
  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(2)
  teams: string[];

  @IsNotEmpty()
  @IsString()
  tournamentId: string;

  round: number;
}
