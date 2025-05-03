import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/health')
  @HttpCode(HttpStatus.OK)
  health(): string {
    return 'OK';
  }

  @Get('/error')
  @HttpCode(HttpStatus.INTERNAL_SERVER_ERROR)
  error(): string {
    throw new Error('Internal Server Error');
  }

  @Get('/complex')
  complexEndpoint() {
    return this.appService.complexEndpoint();
  }
}
