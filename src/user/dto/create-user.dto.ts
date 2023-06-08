import { IsString, IsBoolean } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly email: string;

  @IsString()
  readonly phone: string;

  @IsBoolean()
  readonly isAdmin?: boolean;
}
