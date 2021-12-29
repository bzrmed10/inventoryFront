import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {
  private REST_API_SERVER = "http://127.0.0.1:8000/api";
  constructor(private http:HttpClient) { }



   addSalary(data :any){
    return this.http.post(this.REST_API_SERVER+'/salary/paysalary',data);
    }

   editSalary(id : number,data :any){
    return this.http.put(this.REST_API_SERVER+'/salary/'+id,data);

  }

  getAllMonths(){
    return this.http.get(this.REST_API_SERVER+'/salary/allmonths');

  }

  getSalariesByMonth(requestObj){
    return this.http.post<any>(this.REST_API_SERVER+'/salary/month',requestObj);
  }

  deletePay(id){
    return this.http.delete(this.REST_API_SERVER+'/salary/'+id);

  }

}
