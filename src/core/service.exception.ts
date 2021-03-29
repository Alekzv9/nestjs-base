import { HttpStatus } from '@nestjs/common';

export class ServiceException extends Error {
  private readonly _message: string;
  private readonly _status: number;
  private readonly _error: any;

  /**
   * Creates a service exception.
   * @param message message
   * @param error error object
   * @param status http status
   */
  constructor(
    message: string,
    error: any,
    status: number = HttpStatus.BAD_REQUEST,
  ) {
    super(message ?? 'Something went wrong');
    this._message = message ?? 'Something went wrong';
    this._status = status;
    this._error = error;
  }

  get status() {
    return this._status;
  }

  get error() {
    return this._error;
  }

  get message() {
    return this._message;
  }
}
