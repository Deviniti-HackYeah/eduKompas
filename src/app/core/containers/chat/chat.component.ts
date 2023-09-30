import { ChatService } from '@core/services/chat.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'rtm-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  constructor(private readonly _chatService: ChatService) {
    // TODO:
    this._chatService.postMessage(
      'Nazywam się Maciek i interesuję się programowaniem. Chciałbym studiować coś związanego z IT.',
    );
  }

  public chatForm = new FormGroup({
    input: new FormControl(''),
  });

  public readonly isLoading = this._chatService.isLoading;
  public readonly messages = this._chatService.chat;

  @HostBinding('class') public get classes(): string {
    return 'flex h-full flex-col justify-between';
  }

  public sendMessage(): void {
    const value = this.chatForm.get('input')?.value;
    if (!value) return;
    this._chatService.postMessage(value);
    this.chatForm.reset();
  }
}
