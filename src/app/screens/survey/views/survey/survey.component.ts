import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'rtm-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss'],
})
export class SurveyComponent {
  public surveyNumber: number = 0;

  @Output() public goToBoard = new EventEmitter<void>();

  public goToNextSurvey(): void {
    this.surveyNumber++;
  }
}
