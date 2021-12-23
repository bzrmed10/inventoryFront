import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { Supplier } from '../supplier.model';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-supplier-add',
  templateUrl: './supplier-add.component.html',
  styleUrls: ['./supplier-add.component.scss']
})
export class SupplierAddComponent implements OnInit {

  id: number;
  editMode = false;
  addSupplierForm : FormGroup ;
  error = { name : null, email:null, shopname:null, phone:null, adress:null};
  constructor(private supplierService: SupplierService ,
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


  submit(){
      if(this.editMode){

        this.supplierService.editSupplier(this.id,this.addSupplierForm.value).subscribe({
          next: (data) => {
            this.sharedService.successToast('Supplier updated succesfully');
            this.router.navigate(['supplier']);
          },
          error: (error) => {
            this.error = error.error['errors'];
            this.sharedService.errorToast(error.error['message'])
          }
        })
      }else{

        this.supplierService.addSupplier(this.addSupplierForm.value).subscribe({
          next: (data) => {
            this.sharedService.successToast('Supplier added succesfully');
            this.router.navigate(['supplier']);
          },
          error: (error) => {
            this.error = error.error['errors'];
            this.sharedService.errorToast(error.error['message'])
        }
        })
      }

  }

  private initForm(){
    let name ='';
    let email ='';
    let phone ='';
    let adress = '';
    let shopname = '';


    if(this.editMode){

       this.supplierService.getSupplierByIdApi(this.id).subscribe(
        (data : Supplier) => {

          this.addSupplierForm = new FormGroup ({
            'name' : new FormControl(data.name , Validators.required),
            'email' : new FormControl(data.email, Validators.required),
            'phone' : new FormControl(data.phone, Validators.required),
            'adress' : new FormControl(data.adress , Validators.required),
            'shopname' : new FormControl(data.shopname, Validators.required),
             });
        }
      );


    }

    this.addSupplierForm = new FormGroup ({
      'name' : new FormControl(name , Validators.required),
      'email' : new FormControl(email, Validators.required),
      'phone' : new FormControl(phone, Validators.required),
      'adress' : new FormControl(adress , Validators.required),
      'shopname' : new FormControl(shopname, Validators.required),
       });

  }

}
