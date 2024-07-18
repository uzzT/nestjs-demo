import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // Middleware
  // app.use((req, res, next) => {
  //   console.log(req, res, next);
  //   next();
  // });

  // 内置接口多版本支持
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.useStaticAssets('public', { prefix: '/static' });
  await app.listen(3000);
}
bootstrap();
