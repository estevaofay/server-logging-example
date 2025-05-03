import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [LoggerModule.forRoot({
    pinoHttp:{
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
