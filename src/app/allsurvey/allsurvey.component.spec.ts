import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllsurveyComponent } from './allsurvey.component';

describe('AllsurveyComponent', () => {
  let component: AllsurveyComponent;
  let fixture: ComponentFixture<AllsurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllsurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllsurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
