import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'; //

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()) // para que sirvan las validaciones de class validation
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
