import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { AttendencereportComponent } from './attendencereport/attendencereport.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component:DashboardComponent ,
    children:[
      {path:'dashboard1',component:Dashboard1Component},
      {path:'account',component:MyaccountComponent},
      {path:'attendance-report',component:AttendencereportComponent}
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
