import {
  Injectable,
  OnApplicationBootstrap,
  OnModuleInit,
} from '@nestjs/common';

@Injectable()
export class AppService implements OnModuleInit, OnApplicationBootstrap {
  onModuleInit() {
    console.log('The module has been initialized.');
  }
  onApplicationBootstrap() {
    console.log('The application has been bootstrapped.');
  }
  getHello(): string {
    return 'Hello World!';
  }
}
