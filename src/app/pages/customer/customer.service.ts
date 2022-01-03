import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private REST_API_SERVER = "http://127.0.0.1:8000/api";
  constructor(private http:HttpClient) { }


  getAllCustomers(requestObj){

    return this.http.post<any>(this.REST_API_SERVER+'/customer',requestObj);
   }
   getAllCtm(){

    return this.http.get(this.REST_API_SERVER+'/customer');
   }

   addCustomer(customer :Customer){
    return this.http.post(this.REST_API_SERVER+'/customer/store',customer);
  }

   editCustomer(id : number,newCustomer : Customer){
    return this.http.put(this.REST_API_SERVER+'/customer/'+id,newCustomer);

  }


   deleteCustomer(id : number){
    return this.http.delete(this.REST_API_SERVER+'/customer/'+id);
  }


  getCustomerByIdApi(id : number){
    return this.http.get(this.REST_API_SERVER+'/customer/'+id);
  }
}
