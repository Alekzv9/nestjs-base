import { HttpException, HttpStatus } from '@nestjs/common';

export class ServiceException extends HttpException {
  constructor() {
    super('Something went wrong', HttpStatus.BAD_REQUEST);
  }
}
