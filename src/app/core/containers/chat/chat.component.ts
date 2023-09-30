import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'rtm-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  @HostBinding('class') public get classes(): string {
    return 'flex h-full flex-col justify-between';
  }
}
