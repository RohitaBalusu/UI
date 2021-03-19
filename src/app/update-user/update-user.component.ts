import { Component, OnInit } from '@angular/core';
import { IRegistration } from 'IRegistration.interface';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

 // registration:IRegistration[];
  constructor(private surveyService: SurveyService) { }

  ngOnInit() {
    
  }
  OnSubmit(registrations:IRegistration) {
    // console.log(registrations);
     this.surveyService.updateUser(registrations);
  }
 
}
