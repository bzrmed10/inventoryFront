import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private REST_API_SERVER = "http://127.0.0.1:8000/api";
  constructor(private http:HttpClient) { }


  getAllProducts(requestObj){

    return this.http.post<any>(this.REST_API_SERVER+'/product',requestObj);
   }

   addProduct(product :Product){
    return this.http.post(this.REST_API_SERVER+'/product/store',product);
  }

   editProduct(id : number,newProduct : Product){
    return this.http.put(this.REST_API_SERVER+'/product/'+id,newProduct);

  }


   deleteProduct(id : number){
    return this.http.delete(this.REST_API_SERVER+'/product/'+id);
  }


  getProductByIdApi(id : number){
    return this.http.get(this.REST_API_SERVER+'/product/'+id);
  }
}
