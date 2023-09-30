import { ChatService } from '@core/services/chat.service';
import { FormControl, Validators } from '@angular/forms';
import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'rtm-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  constructor(private readonly _chatService: ChatService) {}

  public input = new FormControl('', Validators.required);
  public readonly messages = this._chatService.chat;

  @HostBinding('class') public get classes(): string {
    return 'flex h-full flex-col justify-between';
  }

  public sendMessage(): void {
    if (this.input.invalid || !this.input.value) {
      return;
    }

    this._chatService.postMessage(this.input.value);
    this.input.reset();
  }
}
