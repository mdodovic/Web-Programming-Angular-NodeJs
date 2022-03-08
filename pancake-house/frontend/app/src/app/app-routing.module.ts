import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdditionalsComponent } from './additionals/additionals.component';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
import { WorkerComponent } from './worker/worker.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'worker', component: WorkerComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'additionals/:choosenProduct', component: AdditionalsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
