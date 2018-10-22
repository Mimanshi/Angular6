import { Component, OnInit, Input } from '@angular/core';
import { extraFile } from '../employee data/extrafile';
@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
  @Input() details: extraFile;
  // The details property must be an Input property, annotated with the @Input() decorator, because the external firstComponent will bind to it.
  constructor() { }

  ngOnInit() {
  }

}
