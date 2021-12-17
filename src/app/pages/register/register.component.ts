import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { RegisterService } from 'src/app/services/register.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  error = {name : null,email:null,password:null,password_confirmation:null};
  constructor(private registerService :RegisterService ,
    private token :TokenService ,
    private router:Router,
    private auth : AuthService) { }

  ngOnInit() {
  }

  onSubmit(form : NgForm){

    // if(form.valid){

      this.registerService.register(form.value).subscribe({
        next: (data) => this.hundleResponse(data),
        error: (error) => this.error = error.error['errors']
      })

    // }
    // else{

    //   this.error = "Invalid form";

    // }
  }

  hundleResponse(data){
    this.token.hundle(data.access_token);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('/dashboard');
  }
}
