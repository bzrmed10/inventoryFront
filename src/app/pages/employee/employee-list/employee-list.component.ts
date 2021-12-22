import { EmployeeService } from '../employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees : any;
  page = 1 ;
  limit = 5;
  skip : any;
  totalItems;
  constructor(private employeeService : EmployeeService,
              private sharedSercice : SharedService) { }

  ngOnInit(): void {
    this.getEmployeeData();
    //  this.employeeService.getAllEmployees().subscribe({
    //   next: (data : Employee[]) => this.employees = data,
    //   error: (error) => console.log(error)
  // });

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

  deleteEmployee(id){
    this.employeeService.deleteEmployee(id).subscribe({
      next: result => {
        this.sharedSercice.successToast('successful deletion');
        this.ngOnInit();
      },
      error: error => {
        this.sharedSercice.errorToast('fail to delete the employee');

      }
    }



      );
  }
}
