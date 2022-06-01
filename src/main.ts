import { NestFactory, Reflector } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { ApiConfigService } from './config';
import { ApiKeyGuard } from './auth/guards/api-key.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ApiConfigService);

  const reflector = app.get(Reflector);

  app.useGlobalGuards(new ApiKeyGuard(reflector));
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  await app.listen(configService.port);
}

bootstrap();
