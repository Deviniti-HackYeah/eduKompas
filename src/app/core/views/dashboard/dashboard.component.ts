import { ChatService } from '@core/services/chat.service';
import { Component } from '@angular/core';

@Component({
  selector: 'rtm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public appState: 'initial' | 'survey' | 'board' = 'board';

  public gotToSurvey(): void {
    this.appState = 'survey';
  }

  constructor(private readonly _chatService: ChatService) {}

  public goToBoard(): void {
    this._chatService.postInitialMessage();
    this.appState = 'board';
  }
}
