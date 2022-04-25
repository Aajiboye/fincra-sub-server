import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  logMessage(payload) {
    console.log(payload);
    return payload;
  }
}
