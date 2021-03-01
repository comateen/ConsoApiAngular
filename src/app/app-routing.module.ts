import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/shared/login/login.component';
import { FourOFourComponent } from './components/shared/four-o-four/four-o-four.component';
import { HomeComponent } from './components/shared/home/home.component';
import { AuthgardService } from './services/authgard.service';
import { RegisterComponent } from './components/shared/register/register.component';

const routes: Routes = [
  {path : 'signin', component : LoginComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'home', component : HomeComponent, canActivate:[AuthgardService]},
  {path : 'notfound', component: FourOFourComponent},
  {path : '**', redirectTo: '/notfound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
