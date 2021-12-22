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
  employees : Employee[];
  constructor(private employeeService : EmployeeService,
              private sharedSercice : SharedService) { }

  ngOnInit(): void {
     this.employeeService.getAllEmployees().subscribe({
      next: (data : Employee[]) => this.employees = data,
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
