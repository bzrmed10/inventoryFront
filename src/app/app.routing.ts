import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';

// const routes: Routes =[
//   {
//     path: '',
//     redirectTo: 'login',
//     pathMatch: 'full',
//   }, {
//     path: '',
//     component: AdminLayoutComponent,
//     children: [
//       {
//         path: '',
//         loadChildren: () => import('src/app/layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
//       }
//     ]
//   }, {
//     path: '',
//     component: AuthLayoutComponent,
//     children: [
//       {
//         path: '',
//         loadChildren: () => import('src/app/layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)
//       }
//     ]
//   }, {
//     path: '**',
//     redirectTo: 'dashboard'
//   }
// ];

const routes: Routes = [

  { path: '', redirectTo: '/dashboard',  pathMatch: 'full' },

  {
    path: 'login',
    component : LoginComponent ,
    canActivate : [BeforeLoginService]
  },
  {
    path: 'register',
    component : RegisterComponent ,
    canActivate : [BeforeLoginService]
  },
  // {
  //    path: 'dashboard',
  //    component: AdminLayoutComponent,
  //    canActivate : [AfterLoginService]

  //   },
    {
          path: '',
          component: AdminLayoutComponent,
          canActivate : [AfterLoginService],
          children: [
            {
              path: '',
              loadChildren: () => import('src/app/layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
            }
          ]
        },
     {
          path: '**',
          redirectTo: 'dashboard'
        }];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: false
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
