import { CustomerService } from '../../customer/customer.service';
import { Component, OnInit } from '@angular/core';
import { PosService } from '../pos.service';
import { SharedService } from 'src/app/services/shared.service';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-pos-card',
  templateUrl: './pos-card.component.html',
  styleUrls: ['./pos-card.component.scss']
})
export class PosCardComponent implements OnInit {
  customers;
  cartProducts = null;
  totalQuantity;
  subTotal;
  tva = 25;
  totalAmout ;
  error = { payby : null , customer_id : null};
  constructor(private customerService :CustomerService ,
              private posService : PosService ,
              private sharedSercice : SharedService) { }

  ngOnInit(): void {

    this.getAllFromCart();

    this.customerService.getAllCtm().subscribe({
      next: (res : any) => {
          this.customers = res;

      },
      error: (error) => console.log(error)
    });


  this.posService.newAddToCart.subscribe((result : number) =>{
    if(result)
    {

      this.posService.addToCart(result).subscribe({
        next: (res : any) => {
          this.sharedSercice.successToast('Product addes to Cart');
          this.getAllFromCart();

        },
        error: (error) => this.sharedSercice.errorToast('fail to add to Cart')
    });
      }
    });
  }

  getAllFromCart(){
    this.posService.getAllCart().subscribe({
      next: (res : any) => {
        this.cartProducts = res;
        this.changeTotal(this.cartProducts)

      },
      error: (error) => console.log(error)
  });
  }

  addOrder(f : NgForm){
    this.error = { payby : null , customer_id : null};
     let data = f.value;
     data.qty = this.totalQuantity;
     data.sub_total = this.subTotal;
     data.tva = this.tva;
     data.total = this.totalAmout;
      this.posService.orderdone(data).subscribe({
        next: (res : any) => {
          this.getAllFromCart();
          f.reset();
          this.posService.orderchange.next(true);
          this.sharedSercice.successToast('Order done');

        },
        error: (error) => {
           if(error.error.errors.customer_id){
             this.error.customer_id = error.error.errors.customer_id[0]
           }
           if(error.error.errors.payby){
            this.error.payby = error.error.errors.payby[0]
          }
           this.sharedSercice.errorToast(error.error.message);
        }
  });
}

  changeTotal(products){
     this.totalQuantity = 0 ;
     this.subTotal = 0
     this.totalAmout = 0;
    products.forEach(element => {
      this.totalQuantity += +element.product_qty;
      this.subTotal += +element.sub_total;

    });

    this.totalAmout = (this.subTotal * this.tva )/100 + this.subTotal;

  }

  increment(id){
    this.posService.incrementProduct(id).subscribe({
      next: (res : any) => {

        this.sharedSercice.successToast('Product incremented');
        this.getAllFromCart();

      },
      error: (error) => this.sharedSercice.errorToast('fail to increment')
    });
  }
  decrement(id){
    this.posService.decrementProduct(id).subscribe({
      next: (res : any) => {
        this.sharedSercice.successToast('Product decremented');
        this.getAllFromCart();

      },
      error: (error) => this.sharedSercice.errorToast('fail to decrement')
    });
  }

  deleteFromCart(id){
    this.posService.deleteFromCart(id).subscribe({
      next: result => {
        this.sharedSercice.successToast('Product deleted from Cart');
        this.getAllFromCart();
      },
      error: error => {
        this.sharedSercice.errorToast('fail to delete from Cart');

      }
    });
  }

}
