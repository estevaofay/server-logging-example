import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from 'nestjs-pino';
import { randomBytes } from 'crypto';
import { LoggerMiddleware } from './logger.middleware';

@Module({
  imports: [LoggerModule.forRoot({
    pinoHttp:{
      genReqId: () =>
        randomBytes(12).toString('hex'),
      transport: process.env.ENABLE_PINO_PRETTY === 'true'
        ? {
          target: 'pino-pretty',
          options: {
            singleLine: true,
          },
        }
        : undefined,
      serializers: {
        req(req) {
          req.body = req.raw.body;
          return req;
        },
        res(res) {
          return res;
        },
      },
      redact: ["hostname"],
    },
    exclude: [{ method: RequestMethod.ALL, path: 'health' }],
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('/');
  }
}
