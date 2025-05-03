import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from 'nestjs-pino';
import { randomBytes } from 'crypto';

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
    }
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
