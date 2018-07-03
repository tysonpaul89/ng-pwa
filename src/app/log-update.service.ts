import { Injectable } from '@angular/core';
import { SwUpdate, SwPush } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class LogUpdateService {

  constructor(private updates: SwUpdate) {
    updates.available.subscribe(event => {
      console.log('Current version is ', event.current);
      console.log('Available version is ', event.available);
    });
    updates.activated.subscribe(event => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
    });
  }
}
