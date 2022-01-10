import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  user = {name: null , email:null}

  icon ;
  path;
  constructor(location: Location,  private element: ElementRef, private router: Router,
    private auth : AuthService,private token :TokenService ,private http: HttpClient) {
    this.location = location;
  }

  ngOnInit() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });

    this.http.get('http://127.0.0.1:8000/api/auth/user', {headers}).subscribe((res : any)=>{
      this.user = res;
  })
    // this.auth.getUser(headers)
    this.listTitles = ROUTES.filter(listTitle => listTitle);
  }
  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.split('/').length > 2){
      titlee = '/'+titlee.split('/')[1];
    }
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){

        if(this.listTitles[item].path === titlee){
            this.icon = this.listTitles[item].icon ;
            this.path = this.listTitles[item].path;
            return  this.listTitles[item].title;
        }
    }
    return 'Dashboard';
  }

  logout(event : MouseEvent){
    event.preventDefault();
    this.token.remove();
    this.auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }

}
