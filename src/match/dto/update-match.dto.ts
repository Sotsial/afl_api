import { PartialType } from '@nestjs/swagger';
import { CreateMatchDto } from './create-match.dto';
import { IsDateString, IsOptional, IsString } from 'class-validator';

export class UpdateMatchDto extends PartialType(CreateMatchDto) {
  @IsDateString()
  date: Date;

  @IsString()
  place: string;

  @IsOptional()
  @IsString()
  mainReferee: string;

  @IsOptional()
  @IsString()
  firstReferee: string;

  @IsOptional()
  @IsString()
  secondReferee: string;
}
