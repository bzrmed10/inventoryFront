import { ProductService } from '../product.service';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import Swal from 'sweetalert2' ;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

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

  deleteProduct(id){
    Swal.fire({
      title: '<h3>Do you want to delete Product ?</h3>',
      icon: 'question',
      iconColor:"#fec9bd80",
      showCancelButton: true,
      confirmButtonText: 'Delete',
    }).then((result) => {

      if (result.isConfirmed) {
        this.productService.deleteProduct(id).subscribe({
          next: result => {
            Swal.fire('Product deleted succesfully', '', 'success')
            this.ngOnInit();
          },
          error: error => {
            Swal.fire('fail to delete the Product', '', 'error')
          }
        });

      }
    })

  }
}
