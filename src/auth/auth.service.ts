import { Injectable } from '@nestjs/common';
import { LoginDTO } from './dto/login.dto';
import { Login } from './interfaces/login';
import { sign, verify } from 'jsonwebtoken';
import { User } from 'src/interfaces/user';
import { ServiceException } from 'src/core/service.exception';

@Injectable()
export class AuthService {
  async signup(loginDto: LoginDTO): Promise<Login> {
    const user = await this.createUser(loginDto);
    const token = await this.createToken(user);
    return token;
  }

  async signin(loginDto: LoginDTO) {
    return {
      token: 'sojwdhqkwjd',
      refreshToken: 'kjhqwd',
    };
  }

  private async createToken(user: User): Promise<Login> {
    try {
      const token = sign(user, 'TH3:Pr1v$t·Key', {
        expiresIn: '1h',
      });
      const refreshToken = sign(user, 'TH3:Pr1v$t·Key', {
        expiresIn: '1h',
      });
      return {
        token,
        refreshToken,
      };
    } catch (error) {
      throw new ServiceException(null, error);
    }
  }

  private async createUser(loginDto: LoginDTO): Promise<User> {
    return {
      email: loginDto.email,
      name: 'Random name',
    };
  }
}
