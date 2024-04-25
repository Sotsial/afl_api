import { PartialType } from '@nestjs/swagger';
import { CreateMatchDto } from './create-match.dto';
import { IsDateString } from 'class-validator';

export class UpdateMatchDto extends PartialType(CreateMatchDto) {
  @IsDateString()
  date: Date;
}
