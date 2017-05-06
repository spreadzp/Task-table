import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Notice } from './shared/notice';

@Injectable()
export class SharedService {
    //private caseNumber: any;

    // Observable string sources
  private caseNumber = new Subject<Notice>(); 

  // Observable Notice streams
  caseNumber$ = this.caseNumber.asObservable();

    // Service message commands
  publishData(data: Notice) {
    this.caseNumber.next(data);
  }
 


    // publishData(data: string) {
    //     console.log('Inside publish data: ' + data);
    //     this.caseNumber = data;
    // }

    // subscribeData() {
    //     console.log('Inside subscribeData: ' + this.caseNumber);
    //     return this.caseNumber;
    // }
}