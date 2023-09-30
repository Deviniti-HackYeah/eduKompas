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

  public get bubbleColors(): string {
    return this.type === 'USER'
      ? 'bg-userbg border-userborder text-usertext'
      : this.type === 'KARA'
      ? 'bg-karabg border-karaborder text-karatext'
      : 'bg-kajtekbg border-kajtekborder text-kajtektext';
  }

  public get bubbleAvatar(): string {
    return this.type === 'USER'
      ? 'assets/avatars/user.png'
      : this.type === 'KARA'
      ? 'assets/avatars/kara.png'
      : 'assets/avatars/kajtek.png';
  }

  @HostBinding('class') public get classes(): string {
    const align = this.direction === 'left' ? 'justify-start' : 'justify-end';
    return ['flex', align].join(' ');
  }
}
