import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';


import Swal from 'sweetalert2' ;
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  products : any;
  page = 1 ;
  limit = 5;
  skip : any;
  totalItems;
  constructor(private productService : ProductService,
              private sharedSercice : SharedService) { }

  ngOnInit(): void {
    this.getProductsData();

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

  addToStock(name,id,oldValue){
    let newVal = {
      'product_quantity' : oldValue
    };
    Swal.fire({
      title: 'Change Quantity',
      input: 'number',
      inputLabel: 'Product '+name,
      inputValue: oldValue,
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'You need to write something!'
        }else if(value == oldValue){
          return 'Same Product Quantity'
        }else{
          newVal.product_quantity = value;
        }
      }
    }).then((result) => {

          if (result.isConfirmed) {
            this.productService.changeQty(id,newVal).subscribe({
              next: result => {
                Swal.fire('Quantity succesfully Change', '', 'success')
                this.ngOnInit();
              },
              error: error => {
                Swal.fire('fail to change the Quantity', '', 'error')
              }
            });
  }
});

  // deleteProduct(id){
  //   Swal.fire({
  //     title: '<h3>Do you want to delete Product ?</h3>',
  //     icon: 'question',
  //     iconColor:"#fec9bd80",
  //     showCancelButton: true,
  //     confirmButtonText: 'Delete',
  //   }).then((result) => {

  //     if (result.isConfirmed) {
  //       this.productService.deleteProduct(id).subscribe({
  //         next: result => {
  //           Swal.fire('Product deleted succesfully', '', 'success')
  //           this.ngOnInit();
  //         },
  //         error: error => {
  //           Swal.fire('fail to delete the Product', '', 'error')
  //         }
  //       });

  //     }
  //   })

  }
}
