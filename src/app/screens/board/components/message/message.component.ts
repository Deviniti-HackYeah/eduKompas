import { Component, HostBinding, Input } from '@angular/core';
import { SPEECH_SPEED } from '@core/constant';
import { Author } from '@shared/models';

@Component({
  selector: 'rtm-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
  public readonly TEXT_SPEED = SPEECH_SPEED;

  @Input() public message?: string;
  @Input() public type?: Author = 'USER';

  public get direction(): 'left' | 'right' {
    return this.type === 'USER' ? 'right' : 'left';
  }

  public get bubbleBgColor(): string {
    return this.type === 'USER'
      ? 'bg-gray-200 border-gray-200'
      : this.type === 'KARA'
      ? 'bg-kara border-kara'
      : 'bg-kajtek border-kajtek';
  }

  public get bubbleAvatar(): string {
    return this.type === 'USER'
      ? 'assets/images/user.png'
      : this.type === 'KARA'
      ? 'assets/images/kara.png'
      : 'assets/images/kajtek.png';
  }

  @HostBinding('class') public get classes(): string {
    const align = this.direction === 'left' ? 'justify-start' : 'justify-end';
    return ['flex', align].join(' ');
  }
}
