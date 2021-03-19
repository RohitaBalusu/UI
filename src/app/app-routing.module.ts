

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './signup/signup.component';
import { SignInComponent } from './signin/signin.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AllsurveyComponent } from './allsurvey/allsurvey.component';

export const appRoutes: Routes = [
  
  { path: 'user', component: UserComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: SignInComponent },
  { path: 'update-user', component: UpdateUserComponent },
  { path: 'allsurvey', component: AllsurveyComponent },
  
  {
      path: 'signup', component: UserComponent,
      children: [{ path: '', component: SignupComponent }]
  },

  {
      path: 'login', component: UserComponent,
      children: [{ path: '', component: SignInComponent }]
  },
  {
    path: 'update-user', component: UserComponent,
    children: [{ path: '', component: UpdateUserComponent }]
},
{
  path: 'allsurvey', component: UserComponent,
  children: [{ path: '', component: AllsurveyComponent }]
},
 { path : '', redirectTo:'/user', pathMatch : 'full'},
  

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }