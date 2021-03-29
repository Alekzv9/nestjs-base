import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from 'src/interfaces/user';

export const UserData = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user as User;
  },
);
