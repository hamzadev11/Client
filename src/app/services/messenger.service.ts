import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject()

  constructor() { }

 

  getMsg() {
    return this.subject.asObservable()
  }
}
