import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyBooksComponent } from './buy-books/buy-books.component';
import { ConfirmBuyComponent } from './confirm-buy/confirm-buy.component';
import { LoginComponent } from './login/login.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { WorkerComponent } from './worker/worker.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'singUp', component: SingUpComponent },
  { path: 'worker', component: WorkerComponent },
  { path: 'buyBooks/:idB', component: BuyBooksComponent },
  { path: 'confirm/:amount', component: ConfirmBuyComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
