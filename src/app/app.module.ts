import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AllsurveyComponent } from './allsurvey/allsurvey.component';
import { HomeComponent } from './home/home.component';
//
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignInComponent,
    SignupComponent,
    UpdateUserComponent,
    AllsurveyComponent,
    HomeComponent
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
