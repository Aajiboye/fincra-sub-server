import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/test2')
  logMessage(@Body() payload) {
    return this.appService.logMessage(payload);
  }

  @Post('/test1')
  logMessage2(@Body() payload) {
    return this.appService.logMessage(payload);
  }
}
