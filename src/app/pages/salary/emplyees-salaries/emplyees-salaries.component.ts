import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee/employee.service';

@Component({
  selector: 'app-emplyees-salaries',
  templateUrl: './emplyees-salaries.component.html',
  styleUrls: ['./emplyees-salaries.component.scss']
})
export class EmplyeesSalariesComponent implements OnInit {

  employees : any;
  page = 1 ;
  limit = 5;
  skip : any;
  totalItems;
  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {
    this.getEmployeeData();

  }
  getEmployeeData(){
        if(this.page == 1){
          this.skip = 0;
        }else{
          this.skip = (this.page-1 ) * this.limit;
        }
        let requestObj = {
          'limit' : this.limit,
          'skip' :this.skip
        }
            this.employeeService.getAllEmployees(requestObj).subscribe({
          next: (res : any) => {

           this.employees = Object.values(res.data)
           this.totalItems = res.total;
          },
          error: (error) => console.log(error)
      });
  }


}
