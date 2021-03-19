import { Component, OnInit } from '@angular/core';
import { ISurvey } from 'ISurvey.interface';
import { Survey } from '../survey.model';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-allsurvey',
  templateUrl: './allsurvey.component.html',
  styleUrls: ['./allsurvey.component.css']
})
export class AllsurveyComponent implements OnInit {
  alert:boolean=false
survey:Survey;
surveys:ISurvey[];
surveyTables:ISurvey[];
  constructor(private surveyService: SurveyService) { }

  ngOnInit() {
    setTimeout(()=> {
      this.surveys=this.surveyService.getSurvey();

    },20);
  }

  OnSubmit(surveys:ISurvey) {
    this.surveyService.addsurvey(surveys);
   this.surveyTables= this.surveyService.getSurvey();
   this.alert=true;
  }
}
