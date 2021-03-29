import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ServiceExceptionFilter } from './core/service-exception.filter';
import { TransformInterceptor } from './core/transform.interceptor';
import { ValidationPipe } from './core/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new ServiceExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new TransformInterceptor());
  app.setGlobalPrefix('api/v1');
  await app.listen(3000);
}
bootstrap();
