import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ServicerComponent } from './servicer/servicer.component';
import { WorkerComponent } from './worker/worker.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'worker', component: WorkerComponent },
  { path: 'servicer', component: ServicerComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
