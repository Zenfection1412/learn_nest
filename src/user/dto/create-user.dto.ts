import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { IsString, IsEnum } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'Fullname for user' })
  @IsString()
  readonly fullname: string;

  @ApiProperty()
  @IsString()
  readonly email: string;

  @ApiProperty()
  @IsString()
  readonly phone: string;

  @ApiProperty()
  @IsEnum(Role)
  readonly role?: Role;
}
