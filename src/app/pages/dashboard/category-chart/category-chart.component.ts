
import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// amCharts imports
import * as am5 from '@amcharts/amcharts5';
import * as am5percent from "@amcharts/amcharts5/percent";
import { DashboardService } from '../dashboard.service';
@Component({
  selector: 'app-category-chart',
  templateUrl: './category-chart.component.html',
  styleUrls: ['./category-chart.component.scss']
})
export class CategoryChartComponent {

  private root: am5.Root;
  categoryData = null;
  constructor(@Inject(PLATFORM_ID) private platformId, private zone: NgZone,
              private dashboardService : DashboardService) {}

  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngAfterViewInit() {



    // Chart code goes in here
    this.browserOnly(() => {
      let root = am5.Root.new("chartdiv");

      this.dashboardService.getSalesByCategory().subscribe(res =>{

        this.categoryData = res
        let chart = root.container.children.push(
          am5percent.PieChart.new(root, {})
        );

        let data = this.categoryData;

            // Create series
            let series = chart.series.push(
              am5percent.PieSeries.new(root, {
                name: "Series",
                valueField: "total",
                categoryField: "category"
              })
            );

          // Define data
          series.data.setAll(data);

          series.slices.template.setAll({
            strokeWidth: 3,
            stroke: am5.color(0xffffff)
          });

          // Add legend
          let legend = chart.children.push(am5.Legend.new(root, {
            centerX: am5.percent(50),
            x: am5.percent(50),
             layout: root.horizontalLayout
          }));

                legend.data.setAll(series.dataItems);
            });
      });






  }
  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.root) {
        this.root.dispose();
      }
    });
  }
}
