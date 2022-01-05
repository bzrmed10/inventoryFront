import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private REST_API_SERVER = "http://127.0.0.1:8000/api";
  constructor(private http:HttpClient) { }

  getAllOrders(requestObj){

    return this.http.post<any>(this.REST_API_SERVER+'/order/all',requestObj);

   }

   getTodayOrders(requestObj){

    return this.http.post<any>(this.REST_API_SERVER+'/order/today',requestObj);

   }

   getOrderDetail(id){
    return this.http.get(this.REST_API_SERVER+'/order/detail/'+id);

   }
}
