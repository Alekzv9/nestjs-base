import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO } from './dto/login.dto';
import { Login } from './interfaces/login';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() loginDto: LoginDTO): Promise<Login> {
    return await this.authService.signup(loginDto);
  }

  @Post('signin')
  async signin(@Body() loginDto: LoginDTO): Promise<Login> {
    return await this.authService.signin(loginDto);
  }
}
