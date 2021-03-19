import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './survey.model';
import { IRegistration } from 'IRegistration.interface';
import { ISurvey } from 'ISurvey.interface';
import { ILogin } from 'ILogin.interface';


//import { User } from './user.model';
/*
  registerUser(user: User) {
    const body: User = {
      emailId: user.emailId,
      password: user.password,
      mobile: user.mobile,
      firstName: user.firstName,
      lastName: user.lastName
    }
*/
@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  private userUrl = 'http://localhost:9093/user';
  private baseUrl = 'http://localhost:9093/survey';

userRegistration: IRegistration[];
surveyt:ISurvey[];
loginU:ILogin[];

  constructor(private http: HttpClient) { 

    this.http.get<IRegistration[]>("assets/Registration.json")
    .subscribe(data=>this.userRegistration=data,error=>console.log(error));
    
    this.http.get<ISurvey[]>("assets/Survey.json")
    .subscribe(data=>this.surveyt=data,error=>console.log(error));

    this.http.get<ILogin[]>("assets/Login.json")
    .subscribe(data=>this.loginU=data,error=>console.log(error));
  }

  addUser(user: IRegistration) {
    this.userRegistration.push(user);
    console.log(user);
  }

  getSurvey():ISurvey[] {
    return this.surveyt;
  }

  addsurvey(survey:ISurvey) {
    this.surveyt.push(survey);
    console.log(this.surveyt);
  }

  updateUser(user: IRegistration) {
    this.userRegistration.push(user);
    console.log(user);
  }

  loginuser(user:ILogin) {
    this.loginU.push(user);
    console.log(user);
  }
/*
  signup(user: Object): Observable<Object> {
    let url=this.userUrl+"/signup";
    return this.http.post(url, user);
  }

  signin(user: Object): Observable<Object> {
    let url=this.userUrl+"/login";
    return this.http.post(url, user);
   
    
  }

  updateUser(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  

  //
  getUserClaims(){
    return  this.http.get(this.baseUrl+'/api/GetUserClaims');
   }
   */
}