import { PartialType } from '@nestjs/swagger';
import { CreateMatchDto } from './create-match.dto';
import { IsDateString, IsString } from 'class-validator';

export class UpdateMatchDto extends PartialType(CreateMatchDto) {
  @IsDateString()
  date: Date;

  @IsString()
  place: string;
}
