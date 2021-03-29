import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { verify } from 'jsonwebtoken';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }

  private validateRequest(
    req: Request,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const token = req.headers['authorization'].split(' ')[1];
      const decodedToken = verify(token, 'TH3:Pr1v$t·Key');
      req['user'] = {
        email: decodedToken['email'],
        name: decodedToken['name'],
      };
      return true;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}
