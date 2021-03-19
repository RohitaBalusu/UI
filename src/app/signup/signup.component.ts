
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IRegistration } from 'IRegistration.interface';

import { User } from '../survey.model';

import { SurveyService } from '../survey.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User;
  //emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
registrations:IRegistration[];
 constructor(private surveyService: SurveyService) { }
  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      mobile: '',
      password: '',
      emailId: '',
      firstName: '',
      lastName: ''
    }
  }

  OnSubmit(registrations:IRegistration) {
   // console.log(registrations);
    this.surveyService.addUser(registrations);
   // this.resetForm(registrations);
    /*
    this.surveyService.registerUser(form.value)
      .subscribe((data: any) => {
        if (data.Succeeded == true) {
          this.resetForm(form);
          this.toastr.success('User registration successful');
        }
        else
          this.toastr.error(data.Errors[0]);
      });
      */
  }

}
