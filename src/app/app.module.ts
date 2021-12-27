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
    CategoryAddComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
