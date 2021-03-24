import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
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
    // TODO: Verify token.
    // Improve with https://docs.nestjs.com/guards
    return true;
  }
}
