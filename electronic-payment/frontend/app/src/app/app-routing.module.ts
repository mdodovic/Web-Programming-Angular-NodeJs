import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillComponent } from './bill/bill.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'user', component: UserComponent },
  { path: 'bill/:type', component: BillComponent },
  { path: 'payBills/:type', component: PaymentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
