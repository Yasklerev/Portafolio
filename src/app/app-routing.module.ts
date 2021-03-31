import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/auth/components/login/login.component';


const routes: Routes = [
  { path: 'iniciarSesion', component: LoginComponent },
  { path: '', pathMatch: 'full', redirectTo: 'iniciarSesion' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
