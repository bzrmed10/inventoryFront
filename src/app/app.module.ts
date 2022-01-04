import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { EmployeeComponent } from './pages/employee/employee.component';
import { EmployeeListComponent } from './pages/employee/employee-list/employee-list.component';
import { EmployeeAddComponent } from './pages/employee/employee-add/employee-add.component';
import { SupplierComponent } from './pages/supplier/supplier.component';
import { SupplierAddComponent } from './pages/supplier/supplier-add/supplier-add.component';
import { SupplierListComponent } from './pages/supplier/supplier-list/supplier-list.component';
import { CategoryComponent } from './pages/category/category.component';
import { CategoryListComponent } from './pages/category/category-list/category-list.component';
import { CategoryAddComponent } from './pages/category/category-add/category-add.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductListComponent } from './pages/product/product-list/product-list.component';
import { ProductAddComponent } from './pages/product/product-add/product-add.component';
import { ExpenseComponent } from './pages/expense/expense.component';
import { ExpenseListComponent } from './pages/expense/expense-list/expense-list.component';
import { ExpenseAddComponent } from './pages/expense/expense-add/expense-add.component';
import { SalaryComponent } from './pages/salary/salary.component';
import { EmplyeesSalariesComponent } from './pages/salary/emplyees-salaries/emplyees-salaries.component';
import { PaySalaryComponent } from './pages/salary/pay-salary/pay-salary.component';
import { MonthsPayComponent } from './pages/salary/months-pay/months-pay.component';
import { PayPerMonthComponent } from './pages/salary/pay-per-month/pay-per-month.component';
import { StockComponent } from './pages/stock/stock.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { CustomerListComponent } from './pages/customer/customer-list/customer-list.component';
import { CustomerAddComponent } from './pages/customer/customer-add/customer-add.component';
import { PosComponent } from './pages/pos/pos.component';
import { PosProductsComponent } from './pages/pos/pos-products/pos-products.component';
import { PosCardComponent } from './pages/pos/pos-card/pos-card.component';
import { OrderComponent } from './pages/order/order.component';
import { OrderListComponent } from './pages/order/order-list/order-list.component';
import { OrderDetailComponent } from './pages/order/order-detail/order-detail.component';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeAddComponent,
    SupplierComponent,
    SupplierAddComponent,
    SupplierListComponent,
    CategoryComponent,
    CategoryListComponent,
    CategoryAddComponent,
    ProductComponent,
    ProductListComponent,
    ProductAddComponent,
    ExpenseComponent,
    ExpenseListComponent,
    ExpenseAddComponent,
    SalaryComponent,
    EmplyeesSalariesComponent,
    PaySalaryComponent,
    MonthsPayComponent,
    PayPerMonthComponent,
    StockComponent,
    CustomerComponent,
    CustomerListComponent,
    CustomerAddComponent,
    PosComponent,
    PosProductsComponent,
    PosCardComponent,
    OrderComponent,
    OrderListComponent,
    OrderDetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
