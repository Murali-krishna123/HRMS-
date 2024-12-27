import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { AttendencereportComponent } from './attendencereport/attendencereport.component';
import { PoliciesComponent } from './policies/policies.component';
import { PayslipsComponent } from './payslips/payslips.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CalendarComponent,
    Dashboard1Component,
    MyaccountComponent,
    AttendencereportComponent,
    PoliciesComponent,
    PayslipsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
