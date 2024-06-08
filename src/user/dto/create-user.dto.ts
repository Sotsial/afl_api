import { Role } from '@prisma/client';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
  ValidateIf,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsStrongPassword({ minLength: 6 })
  password: string;

  @IsOptional()
  @IsEnum(Role)
  role: Role;

  @ValidateIf((o) => o.role === Role.PLAYER)
  @IsNotEmpty()
  @IsString()
  teamId: string;
}
