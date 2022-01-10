import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'uil uil-dashboard', class: '' },
    { path: '/pos', title: 'Pos',  icon: 'uil uil-tachometer-fast-alt', class: '' },
    { path: '/employee', title: 'Employees',  icon:'uil uil-users-alt', class: '' },
    { path: '/supplier', title: 'Suppliers',  icon:'uil uil-truck', class: '' },
    { path: '/category', title: 'Category',  icon:'uil uil-archive', class: '' },
    { path: '/product', title: 'Products',  icon:'uil uil-shopping-bag', class: '' },
    { path: '/expense', title: 'Expense',  icon:'uil uil-bill', class: '' },
    { path: '/customer', title: 'Customers',  icon:'uil uil-globe', class: '' },
    { path: '/salary', title: 'Salary',  icon:'uil uil-credit-card', class: '' },
    { path: '/order', title: 'Orders',  icon:'uil uil-shopping-cart-alt', class: '' },
    { path: '/stock', title: 'Stock',  icon:'uil uil-shop', class: '' }

];

// export const ROUTES: RouteInfo[] = [
//   { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2', class: '' },
//   { path: '/pos', title: 'POS Dashboard',  icon: 'ni ni-ui-04', class: '' },
//   { path: '/employee', title: 'Employees',  icon:'ni-single-02', class: '' },
//   { path: '/supplier', title: 'Suppliers',  icon:'ni-delivery-fast', class: '' },
//   { path: '/category', title: 'Category',  icon:'ni-archive-2', class: '' },
//   { path: '/product', title: 'Products',  icon:'ni-bag-17', class: '' },
//   { path: '/expense', title: 'Expense',  icon:'ni-money-coins', class: '' },
//   { path: '/customer', title: 'Customers',  icon:'ni-world-2', class: '' },
//   { path: '/salary', title: 'Salary',  icon:'ni-credit-card', class: '' },
//   { path: '/order', title: 'Orders',  icon:'ni-cart', class: '' },
//   { path: '/stock', title: 'Stock',  icon:'ni-shop', class: '' }

// ];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
