import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {
  imageSrc: string = '';
  id: number;
  editMode = false;
  addUserForm : FormGroup ;
  error = { fullname : null, email:null, salary:null, phone:null, adress:null};
  constructor(private employeeService: EmployeeService ,
              private sharedService : SharedService ,
              private router : Router,
              private route : ActivatedRoute) {

   }
  ngOnInit(): void {

    this.route.params.subscribe(
      (params :Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );

  }

  onFileChange(event:any) {
    const reader = new FileReader();

    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {

        this.imageSrc = reader.result as string;

        this.addUserForm.patchValue({
          fileSource : this.imageSrc
        });

      };


    }
  }
  submit(){
      if(this.editMode){

        this.employeeService.editEmployee(this.id,this.addUserForm.value).subscribe({
          next: (data) => {
            this.sharedService.successToast('Employee updated succesfully');
            this.router.navigate(['employee']);
          },
          error: (error) => {
            this.error = error.error['errors'];
            this.sharedService.errorToast(error.error['message'])
        }
        })
      }else{

        this.employeeService.addEmployee(this.addUserForm.value).subscribe({
          next: (data) => {
            this.sharedService.successToast('Employee added succesfully');
            this.router.navigate(['employee']);
          },
          error: (error) => {
            this.error = error.error['errors'];
            this.sharedService.errorToast(error.error['message'])
        }
        })
      }

  }

  private initForm(){
    let fullname ='';
    let email ='';
    let phone ='';
    let adress = '';
    let salary = '';
    let joining_date = '';
    let photo ='';
    let nid ='';

    if(this.editMode){

       this.employeeService.getEmployeeByIdApi(this.id).subscribe(
        (data : Employee) => {

          this.addUserForm = new FormGroup ({
            'fullname' : new FormControl(data.fullname , Validators.required),
            'email' : new FormControl(data.email, Validators.required),
            'phone' : new FormControl(data.phone, Validators.required),
            'adress' : new FormControl(data.adress , Validators.required),
            'salary' : new FormControl(data.salary, Validators.required),
            'photo' : new FormControl(''),
            'nid' : new FormControl(data.nid),
            'joining_date' : new FormControl(data.joining_date),
            'fileSource': new FormControl(''),

         });
        }
      );


    }

    this.addUserForm = new FormGroup ({
      'fullname' : new FormControl(fullname , Validators.required),
      'email' : new FormControl(email, Validators.required),
      'phone' : new FormControl(phone, Validators.required),
      'adress' : new FormControl(adress , Validators.required),
      'salary' : new FormControl(salary, Validators.required),
      'photo' : new FormControl(photo),
      'nid' : new FormControl(nid),
      'joining_date' : new FormControl(joining_date),
      'fileSource': new FormControl(''),

    });

  }

}
