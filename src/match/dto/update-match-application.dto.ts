import { ArrayNotEmpty, IsArray, IsNotEmpty, IsString } from 'class-validator';

export class UpdateMatchApplicationDto {
  @IsArray()
  @ArrayNotEmpty()
  playerIds: string[];

  @IsNotEmpty()
  @IsString()
  id: string;

  @IsString()
  color: string;
}
