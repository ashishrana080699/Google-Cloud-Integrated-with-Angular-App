import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import * as firebase from 'firebase/app';
import 'firebase/auth';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import { AuthService } from './auth.service';
import { HomeComponent } from './home/home.component';
import { CapitalizePipe } from './capitalize.pipe';
import { AppRoutingModule } from './/app-routing.module';
import { MenuComponent } from './menu/menu.component';


import { NgxEditorModule } from 'ngx-editor';
import { HttpClientModule } from '@angular/common/http';
import { PredictComponent } from './predict/predict.component';
import { AboutComponent } from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { OverviewComponent } from './overview/overview.component';

let config = {
  apiKey: "AIzaSyBJnSpx3wKLGyQoZqbstsbRc4BgYdt0_3s",
  authDomain: "mlpyflask.firebaseapp.com",
  databaseURL: "https://mlpyflask.firebaseio.com",
  projectId: "mlpyflask",
  storageBucket: "",
  messagingSenderId: "667450385480",
  appId: "1:667450385480:web:36e242f6be85ed88"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    CapitalizePipe,
    MenuComponent,
    PredictComponent,
    AboutComponent,
    WelcomeComponent,
    OverviewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxEditorModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }