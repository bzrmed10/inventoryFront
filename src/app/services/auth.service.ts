import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private REST_API_SERVER = "http://127.0.0.1:8000/api";
  private loggedIn = new BehaviorSubject<boolean>(this.Token.loggedIn());
  authStatus = this.loggedIn.asObservable();

  changeAuthStatus(value : boolean){
    this.loggedIn.next(value);
  }

  constructor(private Token:TokenService,private http:HttpClient) { }

  // getUser(header){
  //   return this.http.get(this.REST_API_SERVER+'/auth/user',{header});
  // }


}
