import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Supplier } from './supplier.model';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private REST_API_SERVER = "http://127.0.0.1:8000/api";
  constructor(private http:HttpClient) { }


  getAllSuppliers(requestObj){

    return this.http.post<any>(this.REST_API_SERVER+'/supplier',requestObj);
   }

   addSupplier(supplier :Supplier){
    return this.http.post(this.REST_API_SERVER+'/supplier/store',supplier);
  }

   editSupplier(id : number,newSupplier : Supplier){
    return this.http.put(this.REST_API_SERVER+'/supplier/'+id,newSupplier);

  }


   deleteSupplier(id : number){
    return this.http.delete(this.REST_API_SERVER+'/supplier/'+id);
  }


  getSupplierByIdApi(id : number){
    return this.http.get(this.REST_API_SERVER+'/supplier/'+id);
  }
}
