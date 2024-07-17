import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // Middleware
  // app.use((req, res, next) => {
  //   console.log(req, res, next);
  //   next();
  // });
  app.useStaticAssets('public', { prefix: '/static' });
  await app.listen(3000);
}
bootstrap();
