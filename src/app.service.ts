import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(port: string): string {
    return `Hello from NestJS on port ${port}`;
  }
}
