import { Component, OnInit } from '@angular/core';

import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data = { orders: 0,sales : 0 ,customers : 0,products : 0 }
  constructor(private dashboardService : DashboardService) { }


  ngOnInit() {

    this.dashboardService.getStatistics().subscribe((res :any) =>{
      this.data.orders = res.todayOrders;
      this.data.products = res.products;
      this.data.customers = res.customers;
      this.data.sales = res.todaySales;
    });


  }


}
