import { Injectable } from '@nestjs/common';
import * as pjson from '../package.json';

@Injectable()
export class AppService {
  getVersion(): { version: string } {
    return { version: pjson.version };
  }
}
