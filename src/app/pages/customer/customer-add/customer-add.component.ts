import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {

  imageSrc: string = '';
  id: number;
  editMode = false;
  addUserForm : FormGroup ;
  error = { fullname : null, email:null, phone:null, adress:null};
  constructor(private customerService: CustomerService ,
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

        this.customerService.editCustomer(this.id,this.addUserForm.value).subscribe({
          next: (data) => {
            this.sharedService.successToast('Customer updated succesfully');
            this.router.navigate(['customer']);
          },
          error: (error) => {
            this.error = error.error['errors'];
            this.sharedService.errorToast(error.error['message'])
        }
        })
      }else{

        this.customerService.addCustomer(this.addUserForm.value).subscribe({
          next: (data) => {
            this.sharedService.successToast('Customer added succesfully');
            this.router.navigate(['customer']);
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
    let photo ='';

    if(this.editMode){

       this.customerService.getCustomerByIdApi(this.id).subscribe(
        (data : Customer) => {

          this.addUserForm = new FormGroup ({
            'fullname' : new FormControl(data.fullname , Validators.required),
            'email' : new FormControl(data.email, Validators.required),
            'phone' : new FormControl(data.phone, Validators.required),
            'adress' : new FormControl(data.adress , Validators.required),
            'photo' : new FormControl(''),
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
      'photo' : new FormControl(photo),
      'fileSource': new FormControl(''),

    });

  }

}
