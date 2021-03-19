
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { UserService } from '../shared/user.service';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userClaims: any;

 // constructor(private router: Router, private userService: UserService) { }
  constructor(private surveyService: SurveyService,
    private router: Router) { }

  ngOnInit() {
    //this.userService.getUserClaims().subscribe((data: any) => {
    //  this.surveyService.getUserClaims().subscribe((data: any) => {
     // this.userClaims = data;

   // });
  }

  Logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }


}
