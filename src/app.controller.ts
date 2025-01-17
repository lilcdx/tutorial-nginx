import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service'; 

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  constructor(private readonly appService: AppService) {} 
  @Get() 
  getHello(): string {
    this.logger.log(`Incoming request to /`);
    const port = process.env.PORT; 
    return this.appService.getHello(port); 
  }
}
