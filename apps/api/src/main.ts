import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable validation pipes globally - validates all DTOs
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // strip unknown properties from request body
      forbidNonWhitelisted: true, // reject requests with unknown properties
      transform: true, // automatically transform payloads to DTO instances
    }),
  );

  // Enable CORS for frontend
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
