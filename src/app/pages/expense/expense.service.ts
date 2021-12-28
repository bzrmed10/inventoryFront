import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Expense } from './expense.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private REST_API_SERVER = "http://127.0.0.1:8000/api";
  constructor(private http:HttpClient) { }


  getAllExpenses(requestObj){

    return this.http.post<any>(this.REST_API_SERVER+'/expense',requestObj);
   }


   addExpense(expense :Expense){
    return this.http.post(this.REST_API_SERVER+'/expense/store',expense);
  }

   editExpense(id : number,newExpense : Expense){
    return this.http.put(this.REST_API_SERVER+'/expense/'+id,newExpense);

  }


   deleteExpense(id : number){
    return this.http.delete(this.REST_API_SERVER+'/expense/'+id);
  }

  getExpenseByIdApi(id : number){
    return this.http.get(this.REST_API_SERVER+'/expense/'+id);
  }
}
