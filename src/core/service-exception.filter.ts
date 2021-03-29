import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Request, Response } from 'express';
import { ServiceException } from './service.exception';

@Catch(ServiceException)
export class ServiceExceptionFilter implements ExceptionFilter {
  catch(exception: ServiceException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.status;

    // TODO: Add logger.
    const exMessage = exception.error?.message || 'Unknow error';
    const stack = exception.error?.stack;
    console.log('ServiceExceptionFilter:logger', { exMessage, stack });

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: exception.message,
    });
  }
}
