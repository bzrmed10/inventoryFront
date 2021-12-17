import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private REST_API_SERVER = "http://127.0.0.1:8000/api/auth";
  constructor(private http :HttpClient) { }

  register(data){
    return this.http.post(this.REST_API_SERVER+'/signup',data);
  }
}
