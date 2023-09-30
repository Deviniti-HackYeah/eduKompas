import { Component } from '@angular/core';

@Component({
  selector: 'rtm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public appState: 'initial' | 'survey' | 'board' = 'initial';

  public gotToSurvey(): void {
    this.appState = 'survey';
  }

  public goToBoard(): void {
    this.appState = 'board';
  }
}
