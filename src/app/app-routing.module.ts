import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { SignupComponent } from './signup/signup.component';

import { PredictComponent } from './predict/predict.component';
import { AboutComponent } from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [{
  path: '', redirectTo: 'home', pathMatch: 'full'
}, {
  path: 'home',  component: HomeComponent
},{
  path:'signup', component:SignupComponent
}, {
  path: 'login', component: LoginComponent
},{
  path:'overview',component:OverviewComponent, canActivate:[AuthGuard]
},{
  path:'welcome',component: WelcomeComponent, canActivate:[AuthGuard]
}, {
  path: 'about', component:AboutComponent , canActivate: [AuthGuard]
},{
  path:'predict' , component: PredictComponent, canActivate:[AuthGuard]
},{
  path: '**', redirectTo: 'home'
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }