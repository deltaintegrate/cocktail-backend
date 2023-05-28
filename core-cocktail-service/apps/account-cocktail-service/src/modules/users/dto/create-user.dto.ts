import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { LoginAuthDto } from './login-auth.dto';

export class CreateUserDto extends PartialType(LoginAuthDto) {
  @IsNotEmpty()
  @MinLength(5)
  full_name: string;

  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(13)
  phone: string;
}
