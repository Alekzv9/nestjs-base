import { Injectable } from '@nestjs/common';
import { LoginDTO } from './dto/login.dto';
import { Login } from './interfaces/login';

@Injectable()
export class AuthService {
  async signup(loginDto: LoginDTO): Promise<Login> {
    return {
      token: 'sojwdhqkwjd',
      refreshToken: 'kjhqwd',
    };
  }

  async signin(loginDto: LoginDTO) {
    return {
      token: 'sojwdhqkwjd',
      refreshToken: 'kjhqwd',
    };
  }
}
