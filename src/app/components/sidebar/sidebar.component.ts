import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/Employee', title: 'Employee',  icon:'ni-single-02', class: '' },
    { path: '/Suppliers', title: 'Suppliers',  icon:'ni-delivery-fast', class: '' },
    { path: '/Category', title: 'Category',  icon:'ni-archive-2', class: '' },
    { path: '/Products', title: 'Products',  icon:'ni-bag-17', class: '' },
    { path: '/Expense', title: 'Expense',  icon:'ni-money-coins', class: '' },
    { path: '/Customers', title: 'Customers',  icon:'ni-world-2', class: '' },
    { path: '/Salary', title: 'Salary',  icon:'ni-credit-card', class: '' },
    { path: '/Orders', title: 'Orders',  icon:'ni-cart', class: '' },
    { path: '/Stock', title: 'Stock',  icon:'ni-shop', class: '' }

];

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
