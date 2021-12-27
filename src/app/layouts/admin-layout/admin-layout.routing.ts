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
  ] }

];
