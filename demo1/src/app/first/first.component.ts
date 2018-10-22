import { Component, OnInit } from '@angular/core';
import { extraFile } from '../employee data/extrafile';
import { Details} from '../employee data/details';
import { EmployeedataService } from '../service/employeedata.service';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  extrafile: extraFile = {
    fullName : 'Mimanshi Tiwari',
    projectName : 'Engineering Tool',
    empId : 2184

  };
  
  details : extraFile[];

  selectedEmp: extraFile;
  
  constructor(private EmployeedataService: EmployeedataService) { }

  ngOnInit() {
    this.getDetails();
  }
  
  onSelect(details: extraFile): void {
  this.selectedEmp = details;
}

  getDetails(): void {
    this.EmployeedataService.getDetails()
      .subscribe(empdata => this.details = empdata);
  }
 // asynchronous approach will work when the dataService requests data from the server.
}

