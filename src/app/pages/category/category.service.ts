import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private REST_API_SERVER = "http://127.0.0.1:8000/api";
  newChanges = new Subject<boolean>();

  constructor(private http:HttpClient) { }


  getAllCategories(requestObj){

    return this.http.post<any>(this.REST_API_SERVER+'/category',requestObj);
   }

   addCategory(category :Category){
    return this.http.post(this.REST_API_SERVER+'/category/store',category);
  }

   editCategory(id : number,newCategory : Category){
    return this.http.put(this.REST_API_SERVER+'/category/'+id,newCategory);

  }


   deleteCategory(id : number){
    return this.http.delete(this.REST_API_SERVER+'/category/'+id);
  }


  getCategoryByIdApi(id : number){
    return this.http.get(this.REST_API_SERVER+'/category/'+id);
  }
}
