import { NestMiddleware } from '@nestjs/common';
import { Request } from 'express';

/**
 * Client information
 *  IP Address
 * Method verbose
 * Path requested
 * Query params
 * Body
 */
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: any, next: () => void) {
    this.formatHeaders(req);
    next();
  }

  /**
   * TODO: Improve this later with proper format.
   * @param req Request
   */
  private formatHeaders(req: Request) {
    let clientIPaddr = null,
      clientProxy = null;

    // is client going through a proxy?
    if (req.headers['via']) {
      // yes
      clientIPaddr = req.headers['x-forwarded-for'];
      clientProxy = req.headers['via'];
    } else {
      // no
      clientIPaddr = req.socket.remoteAddress;
      clientProxy = 'none';
    }
    const pathname = req.url;

    console.log(
      `Request  for: ${pathname} - Client: ${req.headers['user-agent']} - IP address ${clientIPaddr} via proxy ${clientProxy}`,
    );
  }
}
