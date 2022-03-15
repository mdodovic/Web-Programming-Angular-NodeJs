import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
import { TransactionComponent } from './transaction/transaction.component';
import { WorkerComponent } from './worker/worker.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'worker', component: WorkerComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'transaction/:username', component: TransactionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
