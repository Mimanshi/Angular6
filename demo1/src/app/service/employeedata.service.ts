import { Injectable } from '@angular/core';
import { extraFile } from '../employee data/extrafile';
import { Details} from '../employee data/details';
import { Observable, of } from 'rxjs'; //for observable
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class EmployeedataService {
  static addEntry = { employeename: '' , employeeproject: '', employeeid: ''};
  static detailLength = Details.length;
  constructor(private messageService: MessageService) { }
  getDetails(): Observable<extraFile[]> {
    this.messageService.add('message goes here');
    return of(Details);
  }
  //of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
}
