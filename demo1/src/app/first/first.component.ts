import { Component, OnInit } from '@angular/core';
import { extraFile } from '../extrafile';
import { Details} from '../details';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  details = Details;
  
  extrafile: extraFile = {
    fullName : 'Mimanshi Tiwari',
    projectName : 'Engineering Tool',
    empId : 2184

  };
  constructor() { }
  
  myName = 'Mimanshi';
  ngOnInit() {
  }

}
