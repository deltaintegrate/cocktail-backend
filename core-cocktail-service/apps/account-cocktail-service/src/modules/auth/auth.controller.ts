import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { LoginAuthDto } from '../users/dto/login-auth.dto';
import { Public } from './constants/jwt.constants';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('register')
  registerUser(@Body() userObject: CreateUserDto) {
    return this.authService.register(userObject);
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  loginUser(@Body() userObject: LoginAuthDto) {
    return this.authService.login(userObject);
  }
}
