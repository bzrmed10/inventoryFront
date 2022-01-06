import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { chartOptions } from '../../../variables/charts';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-weekly-sales-orders',
  templateUrl: './weekly-sales-orders.component.html',
  styleUrls: ['./weekly-sales-orders.component.scss']
})
export class WeeklySalesOrdersComponent implements OnInit {

  Highcharts = null;
  chartOptions = {}

  constructor(private dashboardService:DashboardService) { }

  ngOnInit(): void {

      this.dashboardService.getTotalOrdersProduct().subscribe((res : any)=>{
          let tabledays = res.days;
          let tableQtyProductSold = res.qtyProductSold;
          let tableOrders = res.orders;

          this.setChartOptions(Highcharts,'line',tabledays,tableQtyProductSold,tableOrders);
      });



  }

  setChartOptions(Highcharts,type,tabledays,tableProductSold,tableOrders){
    this.Highcharts = Highcharts;
    this.chartOptions = {
      chart: {
          type: type
      },
      title: {
          text: ''
      },
      subtitle: {
          text: null
      },
      xAxis: {
          categories: tabledays,
          tickmarkPlacement: 'on',
          title: {
              enabled: false
          }
      },
      yAxis: {
          title: {
              text: 'Total'
          }

      },
      tooltip: {
          split: true,
      },
      credits: {
        enabled:false
      },
      exporting : {
        enabled:true
      },
      plotOptions: {
          area: {
              stacking: 'normal',
              lineColor: '#666666',
              lineWidth: 1,
              marker: {
                  lineWidth: 1,
                  lineColor: '#666666'
              }
          }
      },
      series: [{
          name: 'Number Orders',
          data: tableOrders,
      }
      ,
      {
        name: 'Quantity of products sold',
        data: tableProductSold,
        color:"#8eec7a96"


    }
    ]
    };

    HC_exporting(Highcharts);
  // setTimeout(()=>{
  //  window.dispatchEvent(
  //    new Event('resize')
  //    );
  // },300);
  }


}
