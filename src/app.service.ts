import { Injectable } from '@nestjs/common';
import * as pjson from '../package.json';

@Injectable()
export class AppService {
  getVersion(): any {
    return { version: pjson.version };
  }
}
