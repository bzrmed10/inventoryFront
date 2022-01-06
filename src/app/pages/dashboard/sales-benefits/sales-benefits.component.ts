import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-sales-benefits',
  templateUrl: './sales-benefits.component.html',
  styleUrls: ['./sales-benefits.component.scss']
})
export class SalesBenefitsComponent implements OnInit {
  Highcharts = null;
  chartOptions = {}

  constructor(private dashboardService:DashboardService) { }

  ngOnInit(): void {

      this.dashboardService.getSalesBenefits().subscribe((res : any)=>{
          let tabledays = res.days;
          let tableSales = res.sales;
          let salesTva = res.salesTva;
          let tableBenefits = res.benefits;

          this.setChartOptions(Highcharts,'column',tabledays,tableSales,salesTva,tableBenefits);
      });



  }

  setChartOptions(Highcharts,type,tabledays,tableSales,tableSalesTva,tableBenefits){
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
              text: 'Total ($)'
          }

      },
      tooltip: {
          split: true,
          valueSuffix: ' $'
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
          name: 'Sales',
          data: tableSales,
      },
      {
        name: 'Sales with TVA',
        data: tableSalesTva,
        color:"#8eec7a96"
    },{
      name: 'Net revenue',
        data: tableBenefits,
        color:"#825ee4"
    }
    ]
    };

    HC_exporting(Highcharts);
  setTimeout(()=>{
   window.dispatchEvent(
     new Event('resize')
     );
  },300);
  }


}

