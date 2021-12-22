import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private REST_API_SERVER = "http://127.0.0.1:8000/api";
  constructor(private http:HttpClient) { }


  getAllEmployees(requestObj){

    return this.http.post<any>(this.REST_API_SERVER+'/employee',requestObj);
   }

   addEmployee(employee :Employee){
    return this.http.post(this.REST_API_SERVER+'/employee/store',employee);
  }

   editEmployee(id : number,newEmployee : Employee){
    return this.http.put(this.REST_API_SERVER+'/employee/'+id,newEmployee);

  }


   deleteEmployee(id : number){
    return this.http.delete(this.REST_API_SERVER+'/employee/'+id);
  }


  getEmployeeByIdApi(id : number){
    return this.http.get(this.REST_API_SERVER+'/employee/'+id);
  }
}
