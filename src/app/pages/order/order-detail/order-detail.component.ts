import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  products;
  order;
  id;
  constructor(private orderService : OrderService ,
              private router : Router,
              private route : ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params :Params) => {
        this.id = +params['id'];
        this.orderDetail(this.id);
      }
    );

  }

  orderDetail(id){
    this.orderService.getOrderDetail(id).subscribe({
      next: (res : any) => {
       this.products = res.products
       this.order = res.order
      },
      error: (error) => console.log(error)
  });
  }

}
