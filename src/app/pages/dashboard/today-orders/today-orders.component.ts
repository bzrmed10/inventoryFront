import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../order/order.service';

@Component({
  selector: 'app-today-orders',
  templateUrl: './today-orders.component.html',
  styleUrls: ['./today-orders.component.scss']
})
export class TodayOrdersComponent implements OnInit {
  orders : any;
  page = 1 ;
  limit = 5;
  skip : any;
  totalItems;
  constructor(private orderService : OrderService) { }

  ngOnInit(): void {
    this.getOrdersData();
  }

  getOrdersData(){
    if(this.page == 1){
      this.skip = 0;
    }else{
      this.skip = (this.page-1 ) * this.limit;
    }
    let requestObj = {
      'limit' : this.limit,
      'skip' :this.skip
    }
        this.orderService.getTodayOrders(requestObj).subscribe({
      next: (res : any) => {

       this.orders = Object.values(res.data)
       this.totalItems = res.total;
      },
      error: (error) => console.log(error)
  });
}
}
