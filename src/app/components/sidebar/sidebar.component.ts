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
    { path: '/employee', title: 'Employees',  icon:'ni-single-02', class: '' },
    { path: '/supplier', title: 'Suppliers',  icon:'ni-delivery-fast', class: '' },
    { path: '/category', title: 'Category',  icon:'ni-archive-2', class: '' },
    { path: '/products', title: 'Products',  icon:'ni-bag-17', class: '' },
    { path: '/expense', title: 'Expense',  icon:'ni-money-coins', class: '' },
    { path: '/customers', title: 'Customers',  icon:'ni-world-2', class: '' },
    { path: '/salary', title: 'Salary',  icon:'ni-credit-card', class: '' },
    { path: '/orders', title: 'Orders',  icon:'ni-cart', class: '' },
    { path: '/stock', title: 'Stock',  icon:'ni-shop', class: '' }

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
