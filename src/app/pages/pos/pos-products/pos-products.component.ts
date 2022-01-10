import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { CategoryService } from '../../category/category.service';
import { ProductService } from '../../product/product.service';
import { SupplierService } from '../../supplier/supplier.service';
import { PosService } from '../pos.service';

@Component({
  selector: 'app-pos-products',
  templateUrl: './pos-products.component.html',
  styleUrls: ['./pos-products.component.scss']
})
export class PosProductsComponent implements OnInit {

  products : any;
  categories;
  suppliers;
  page = 1 ;
  limit = 12;
  skip : any;
  totalItems;
  constructor(private productService : ProductService,
              private categoryService : CategoryService,
              private supplierService : SupplierService,
              private posService : PosService ,
              private shareService : SharedService) { }

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

    this.getProductsData();

    this.posService.orderchange.subscribe((result : Boolean) =>{
      if(result){
        this.getProductsData();
        this.posService.orderchange.next(false);

      }
    });
  }




  getProductsData(){
        if(this.page == 1){
          this.skip = 0;
        }else{
          this.skip = (this.page-1 ) * this.limit;
        }
        let requestObj = {
          'limit' : this.limit,
          'skip' :this.skip
        }
            this.productService.getAllProducts(requestObj).subscribe({
          next: (res : any) => {
           this.products = Object.values(res.data)
           this.totalItems = res.total;
          },
          error: (error) => console.log(error)
      });
  }

  applyFilter(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value;
    if(filterValue != ""){

      let requestObj = {
        'limit' : this.limit,
        'skip' :this.skip,
        'name' :filterValue
      }
      this.productService.searchProduct(requestObj).subscribe({
        next: (res : any) => {

         this.products = Object.values(res.data)
         this.totalItems = res.total;
        },
        error: (error) => console.log(error)
    });
    }else{
      this.getProductsData();
    }


  }
  onChangeSelect(id,type){
    if(id != 0){
      let requestObj = {
        'limit' : this.limit,
        'skip' :this.skip,
      }
      if(type == 'category'){
        requestObj["category"] = id;
      }else if(type == 'supplier'){
        requestObj["supplier"] = id;
      }
      this.productService.searchProduct(requestObj).subscribe({
        next: (res : any) => {

         this.products = Object.values(res.data)
         this.totalItems = res.total;
        },
        error: (error) => console.log(error)
    });
    }else{
      this.getProductsData();
    }
  }


  addToCart(id){
    this.posService.newAddToCart.next(id);
  }

  emptyStock(){
    this.shareService.errorToast('Product doesn\'t exist on stock');
  }
}
