import { IsNotEmpty, IsString } from 'class-validator';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

export class CreatePlayerDto extends CreateUserDto {
  @IsNotEmpty()
  @IsString()
  teamId: string;
}
