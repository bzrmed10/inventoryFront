import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { of } from 'rxjs';
import { TokenService } from '../../services/token.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private loginService : LoginServiceService ,
              private token : TokenService ,
              private auth : AuthService ,
              private router:Router) {}
  testerror = null;

  ngOnInit() {
  }

  onSubmit(form : NgForm){

    if(form.valid){

      this.loginService.login(form.value).subscribe({
        next: (data) => this.hundleResponse(data),
        error: (error) => this.testerror = error.error["error"]
    })

    }
    else{
      this.testerror = "Invalid Email or Password";
    }
  }

  hundleResponse(data){
    this.token.hundle(data.access_token);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('/dashboard');
  }

  ngOnDestroy() {
  }

}
