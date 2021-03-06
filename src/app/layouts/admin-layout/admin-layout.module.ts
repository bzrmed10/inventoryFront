import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodayOrdersComponent } from 'src/app/pages/dashboard/today-orders/today-orders.component';
import { CategoryChartComponent } from 'src/app/pages/dashboard/category-chart/category-chart.component';
import {
    WeeklySalesOrdersComponent
} from '../../pages/dashboard/weekly-sales-orders/weekly-sales-orders.component';

import { HighchartsChartModule } from 'highcharts-angular';
import { SalesBenefitsComponent } from 'src/app/pages/dashboard/sales-benefits/sales-benefits.component';
import { TopProductsComponent } from 'src/app/pages/dashboard/top-products/top-products.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    HighchartsChartModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    TodayOrdersComponent,
    CategoryChartComponent,
    WeeklySalesOrdersComponent,
    SalesBenefitsComponent,
    TopProductsComponent
  ]
})

export class AdminLayoutModule {}
