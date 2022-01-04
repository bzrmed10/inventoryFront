import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  orders : any;
  page = 1 ;
  limit = 5;
  skip : any;
  totalItems;
  constructor(private orderService : OrderService,
              private sharedSercice : SharedService) { }

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
            this.orderService.getAllOrders(requestObj).subscribe({
          next: (res : any) => {

           this.orders = Object.values(res.data)
           this.totalItems = res.total;
          },
          error: (error) => console.log(error)
      });
  }


}
