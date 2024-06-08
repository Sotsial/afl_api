import { IsNotEmpty, IsString } from 'class-validator';
import { CreateUserDto } from '../../user/dto/create-user.dto';
import { OmitType } from '@nestjs/swagger';

export class CreatePlayerDto extends OmitType(CreateUserDto, ['role']) {
  @IsNotEmpty()
  @IsString()
  teamId: string;
}
