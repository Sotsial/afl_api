import { PartialType } from '@nestjs/mapped-types';
import { CreateTournamentDto } from './create-tournament.dto';
import { IsArray } from 'class-validator';

export class UpdateTournamentDto extends PartialType(CreateTournamentDto) {
  @IsArray()
  teamIds: string[];
}
