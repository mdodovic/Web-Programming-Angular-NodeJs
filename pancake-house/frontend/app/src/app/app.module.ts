import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WorkerComponent } from './worker/worker.component';
import { CustomerComponent } from './customer/customer.component';
import { AdditionalsComponent } from './additionals/additionals.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WorkerComponent,
    CustomerComponent,
    AdditionalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
