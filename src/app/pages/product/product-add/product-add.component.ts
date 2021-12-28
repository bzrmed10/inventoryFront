import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { CategoryService } from '../../category/category.service';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { SupplierService } from '../../supplier/supplier.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  imageSrc: string = '';
  id: number;
  editMode = false;
  addProductForm : FormGroup ;
  categories= null;
  suppliers=null;
  error = { product_name : null, product_code:null, category_id:null, supplier_id:null,
    buying_price:null,product_quantity:null,selling_price:null,buying_date:null};

  constructor(private productService: ProductService ,
              private categoryService : CategoryService,
              private supplierService : SupplierService,
              private sharedService : SharedService ,
              private router : Router,
              private route : ActivatedRoute) {

   }
  ngOnInit(): void {

    this.categoryService.getAllCat().subscribe({
      next: (res : any) => {
          this.categories = res;

      },
      error: (error) => console.log(error)
  });

  this.supplierService.getAllSup().subscribe({
    next: (res : any) => {
        this.suppliers = res;

    },
    error: (error) => console.log(error)
});

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

        this.addProductForm.patchValue({
          fileSource : this.imageSrc
        });

      };


    }
  }
  submit(){
      if(this.editMode){

        this.productService.editProduct(this.id,this.addProductForm.value).subscribe({
          next: (data) => {
            this.sharedService.successToast('Product updated succesfully');
            this.router.navigate(['product']);
          },
          error: (error) => {
            this.error = error.error['errors'];
            this.sharedService.errorToast(error.error['message'])
        }
        })
      }else{

        this.productService.addProduct(this.addProductForm.value).subscribe({
          next: (data) => {
            this.sharedService.successToast('Product added succesfully');
            this.router.navigate(['product']);
          },
          error: (error) => {
            this.error = error.error['errors'];
            this.sharedService.errorToast(error.error['message'])
        }
        })
      }

  }

  private initForm(){
    let product_name ='';
    let product_code ='';
    let category_id ='';
    let supplier_id = '';
    let buying_price = '';
    let root = '';
    let product_quantity ='';
    let selling_price ='';
    let buying_date ='';
    let product_image ='';


    if(this.editMode){

       this.productService.getProductByIdApi(this.id).subscribe(
        (data : Product) => {

          this.addProductForm = new FormGroup ({
            'product_name' : new FormControl(data.product_name , Validators.required),
            'product_code' : new FormControl(data.product_code, Validators.required),
            'category_id' : new FormControl(data.category_id, Validators.required),
            'supplier_id' : new FormControl(data.supplier_id , Validators.required),
            'buying_price' : new FormControl(data.buying_price, Validators.required),
            'selling_price' : new FormControl(data.selling_price, Validators.required),
            'buying_date' : new FormControl(data.buying_date,Validators.required),
            'product_quantity' : new FormControl(data.product_quantity,Validators.required),
            'root' : new FormControl(data.root),
            'product_image' : new FormControl(''),
            'fileSource': new FormControl(''),

         });
        }
      );


    }

    this.addProductForm = new FormGroup ({
      'product_name' : new FormControl(product_name , Validators.required),
      'product_code' : new FormControl(product_code, Validators.required),
      'category_id' : new FormControl(category_id, Validators.required),
      'supplier_id' : new FormControl(supplier_id , Validators.required),
      'buying_price' : new FormControl(buying_price, Validators.required),
      'selling_price' : new FormControl(selling_price, Validators.required),
      'buying_date' : new FormControl(buying_date,Validators.required),
      'product_quantity' : new FormControl(product_quantity,Validators.required),
      'root' : new FormControl(root),
      'product_image' : new FormControl(product_image),
      'fileSource': new FormControl(''),

    });

  }

}
