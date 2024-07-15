import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getSomething(): string {
    return "Sending back something as the response!, hopefully you'll like it.";
  }
}
