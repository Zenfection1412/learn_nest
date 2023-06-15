import { Role } from '@prisma/client';
import { IsString, IsEnum } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly fullname: string;

  @IsString()
  readonly email: string;

  @IsString()
  readonly phone: string;

  @IsEnum(Role)
  readonly role?: Role;
}
