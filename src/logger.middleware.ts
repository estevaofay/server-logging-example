import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger(LoggerMiddleware.name);
  use(req: Request, _res: Response, next: NextFunction) {
    if (req.url.startsWith('/health')) {
      return next();
    }
    this.logger.log("Request received")
    return next();
  }
}
