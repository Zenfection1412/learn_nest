import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.time('Request Processing Finished');
    console.log('Request Processing via Middleware...');

    res.on('finish', () => console.timeEnd('Request Processing Finished'));

    next();
  }
}
