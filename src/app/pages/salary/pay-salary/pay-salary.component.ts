import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { EmployeeService } from '../../employee/employee.service';
import { SalaryService } from '../salary.service';


@Component({
  selector: 'app-pay-salary',
  templateUrl: './pay-salary.component.html',
  styleUrls: ['./pay-salary.component.scss']
})
export class PaySalaryComponent implements OnInit {

  id: number;
  addPayForm : FormGroup ;
  error = { salary_month:null ,salary:null};
  constructor(private employeeService: EmployeeService ,
              private salaryService :SalaryService,
              private sharedService : SharedService ,
              private router : Router,
              private route : ActivatedRoute) {

   }
  ngOnInit(): void {

    this.route.params.subscribe(
      (params :Params) => {
        this.id = +params['id'];
          this.initForm();
      }
    );

  }


  submit(){


        this.salaryService.addSalary(this.addPayForm.value).subscribe({
          next: (data) => {
            this.sharedService.successToast('Salary payed succesfully');
            this.router.navigate(['salary']);
          },
          error: (error) => {
            this.error = error.error['errors'];
            this.sharedService.errorToast(error.error['message'])
        }
        })


  }

  private initForm(){
    this.addPayForm = new FormGroup ({
      'fullname' : new FormControl(''),
      'email' : new FormControl(''),
      'salary' : new FormControl(''),
      'employee_id' : new FormControl(''),
      'salary_month': new FormControl('')
   });
       this.employeeService.getEmployeeByIdApi(this.id).subscribe(
        (data : any) => {

          this.addPayForm = new FormGroup ({
            'fullname' : new FormControl(data.fullname),
            'email' : new FormControl(data.email),
            'salary' : new FormControl(data.salary),
            'employee_id' : new FormControl(data.id),
            'salary_month': new FormControl('')
         });


        }
      );






  }

}
