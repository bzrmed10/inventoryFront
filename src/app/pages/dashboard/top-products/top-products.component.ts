import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-top-products',
  templateUrl: './top-products.component.html',
  styleUrls: ['./top-products.component.scss']
})
export class TopProductsComponent implements OnInit {

  products : any;
  page = 1 ;
  limit = 5;
  skip : any;
  totalItems;
  constructor(private dashboardService : DashboardService) { }

  ngOnInit(): void {
    this.getProductsData();
  }

  getProductsData(){

        this.dashboardService.getTopProducts().subscribe({
      next: (res : any) => {

       this.products = res
      },
      error: (error) => console.log(error)
  });
}
}
