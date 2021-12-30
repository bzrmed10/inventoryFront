import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { EmployeeComponent } from '../../pages/employee/employee.component';
import { EmployeeListComponent } from '../../pages/employee/employee-list/employee-list.component';
import { EmployeeAddComponent } from '../../pages/employee/employee-add/employee-add.component';
import { SupplierComponent } from '../../pages/supplier/supplier.component';
import { SupplierListComponent } from '../../pages/supplier/supplier-list/supplier-list.component';
import { SupplierAddComponent } from '../../pages/supplier/supplier-add/supplier-add.component';
import { CategoryComponent } from 'src/app/pages/category/category.component';
import { CategoryListComponent } from 'src/app/pages/category/category-list/category-list.component';
import { CategoryAddComponent } from 'src/app/pages/category/category-add/category-add.component';
import { ProductComponent } from '../../pages/product/product.component';
import { ProductListComponent } from '../../pages/product/product-list/product-list.component';
import { ProductAddComponent } from '../../pages/product/product-add/product-add.component';
import { ExpenseComponent } from 'src/app/pages/expense/expense.component';
import { ExpenseListComponent } from 'src/app/pages/expense/expense-list/expense-list.component';
import { ExpenseAddComponent } from 'src/app/pages/expense/expense-add/expense-add.component';
import { SalaryComponent } from 'src/app/pages/salary/salary.component';
import { EmplyeesSalariesComponent } from 'src/app/pages/salary/emplyees-salaries/emplyees-salaries.component';
import { PaySalaryComponent } from '../../pages/salary/pay-salary/pay-salary.component';
import { MonthsPayComponent } from '../../pages/salary/months-pay/months-pay.component';
import { PayPerMonthComponent } from 'src/app/pages/salary/pay-per-month/pay-per-month.component';
import { StockComponent } from 'src/app/pages/stock/stock.component';
import { CustomerComponent } from '../../pages/customer/customer.component';
import { CustomerListComponent } from '../../pages/customer/customer-list/customer-list.component';
import { CustomerAddComponent } from 'src/app/pages/customer/customer-add/customer-add.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'employee',      component: EmployeeComponent,
     children : [
      {path:'' , component : EmployeeListComponent},
      {path:'add' , component : EmployeeAddComponent},
      {path:':id/edit' , component : EmployeeAddComponent}
  ] },
  { path: 'supplier',      component: SupplierComponent,
     children : [
      {path:'' , component : SupplierListComponent},
      {path:'add' , component : SupplierAddComponent},
      {path:':id/edit' , component : SupplierAddComponent}
  ] },
  { path: 'category',      component: CategoryComponent,
     children : [
      {path:'' , component : CategoryAddComponent},
      {path:':id/edit' , component : CategoryAddComponent}
  ] },
  { path: 'product', component: ProductComponent,
  children : [
   {path:'' , component : ProductListComponent},
   {path:'add' , component : ProductAddComponent},
   {path:':id/edit' , component : ProductAddComponent}
] },
{ path: 'expense', component: ExpenseComponent,
  children : [
   {path:'' , component : ExpenseListComponent},
   {path:'add' , component : ExpenseAddComponent},
   {path:':id/edit' , component : ExpenseAddComponent}
] },
{ path: 'salary', component: SalaryComponent,
  children : [
   {path:'' , component : EmplyeesSalariesComponent},
   {path:'pay/:id' , component : PaySalaryComponent},
   {path:'monthpay' , component : MonthsPayComponent},
   {path:'month/:month' , component : PayPerMonthComponent}
] },
{ path: 'stock', component: StockComponent},
{ path: 'customer',      component: CustomerComponent,
     children : [
      {path:'' , component : CustomerListComponent},
      {path:'add' , component : CustomerAddComponent},
      {path:':id/edit' , component : CustomerAddComponent}
  ] }
];
