import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() { }

  info(textMessage: string) {
    console.info(textMessage);
  };

  warning(textMessage: string) {
    console.warn(textMessage);
  };

  log(textMessage: string) {
    console.log(textMessage);
  };

  clear(textMessage: string) {
    console.clear();
  }


}
