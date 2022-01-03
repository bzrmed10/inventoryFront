import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PosService {
  private REST_API_SERVER = "http://127.0.0.1:8000/api";
  newAddToCart = new Subject<number>();
  orderchange = new Subject<boolean>();

  constructor(private http : HttpClient) { }

  addToCart(id :number){
    let data = {id : null};
    data.id = id;
    return this.http.post(this.REST_API_SERVER+'/pos/addToCart',data);
  }

  incrementProduct(id :number){
    let data = {id : null};
    data.id = id;
    return this.http.post(this.REST_API_SERVER+'/pos/incrementProduct',data);
  }

  decrementProduct(id :number){
    let data = {id : null};
    data.id = id;
    return this.http.post(this.REST_API_SERVER+'/pos/decrementProduct',data);
  }


  getAllCart(){
    return this.http.get(this.REST_API_SERVER+'/pos/getAllCart');
  }

  deleteFromCart(id : number) {
    return this.http.delete(this.REST_API_SERVER+'/pos/'+id);
  }

  orderdone(order : any){

      return this.http.post(this.REST_API_SERVER+'/pos/orderDone',order);

  }


}
