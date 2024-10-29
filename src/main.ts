import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT; 
  if (!port) {
    throw new Error('PORT environment variable is not set.');
  }

  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}

bootstrap();
