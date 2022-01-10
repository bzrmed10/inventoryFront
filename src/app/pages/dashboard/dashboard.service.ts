import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private REST_API_SERVER = "http://127.0.0.1:8000/api";
  constructor(private http:HttpClient) { }

  getStatistics(){
    return this.http.get(this.REST_API_SERVER+'/dashboard/getStatistics');
  }

  getSalesByCategory(){
    return this.http.get(this.REST_API_SERVER+'/dashboard/getSalesByCategory');
  }

  getTotalOrdersProduct(){
    return this.http.get(this.REST_API_SERVER+'/dashboard/getTotalOrdersProduct');
  }
  getSalesBenefits(){
    return this.http.get(this.REST_API_SERVER+'/dashboard/getSalesBenefits');
  }
  getTopProducts(){
    return this.http.get(this.REST_API_SERVER+'/dashboard/getTopProducts');
  }



}
