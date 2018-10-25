import { Component, OnInit, Input } from '@angular/core';
import { extraFile } from '../employee data/extrafile';
import { EmployeedataService } from '../service/employeedata.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
  @Input() details: extraFile;
  empname;
  empproject;
  empid;
  // The details property must be an Input property, annotated with the @Input() decorator, because the external firstComponent will bind to it.
  constructor(private EmployeedataService: EmployeedataService) { }
  
  
  ngOnInit() {
  }
  
  validation(){
    this.empname = <HTMLInputElement>document.getElementById('fullname');
    this.empproject = <HTMLInputElement>document.getElementById('projectname');
    this.empid = <HTMLInputElement>document.getElementById('employeeid');


    EmployeedataService.addEntry.employeename = this.empname.value.toUpperCase();
    EmployeedataService.addEntry.employeeproject = this.empproject.value.toUpperCase();
    EmployeedataService.addEntry.employeeid = this.empid.value.toUpperCase();


     var addedeemployee =<HTMLBodyElement>document.getElementById("addedemployee");
    addedeemployee.innerText=EmployeedataService.addEntry.employeename +"  "+ EmployeedataService.addEntry.employeeproject+"   " +EmployeedataService.addEntry.employeeid  ;
    
  }

}
