
import { Component, OnInit } from '@angular/core';
//import { UserService } from '../../shared/user.service';
import { SurveyService } from '../survey.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ILogin } from 'ILogin.interface';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent implements OnInit {
  //isLoginError : boolean = false;
  logins:ILogin[];
  //
  constructor(private surveyService: SurveyService,
    private router: Router) { }

  ngOnInit() {
    
  }

 // OnSubmit(userName,password){
    OnSubmit(login:ILogin){
      this.surveyService.loginuser(login);
     // console.log(login);
     //this.userService.userAuthentication(userName,password).subscribe((data : any)=>{
      //this.surveyService.userAuthentication(userName,password).subscribe((data : any)=>{
      //localStorage.setItem('userToken',data.access_token);
      this.router.navigate(['/update-user']);
  //  },
  //  (err : HttpErrorResponse)=>{
  //    this.isLoginError = true;
  //  });
  }

}