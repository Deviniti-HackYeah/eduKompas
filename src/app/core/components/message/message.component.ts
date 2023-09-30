import { Component, HostBinding, Input } from '@angular/core';
import { Author } from '@shared/models';

@Component({
  selector: 'rtm-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
  @Input() public message?: string;
  @Input() public type?: Author = 'USER';

  public get direction(): 'left' | 'right' {
    return this.type === 'USER' ? 'right' : 'left';
  }

  public get bubbleBgColor(): string {
    return this.type === 'USER'
      ? 'bg-yellow-100 border-yellow-100'
      : this.type === 'KARA'
      ? 'bg-red-100 border-red-100'
      : 'bg-blue-500 border-blue-100';
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
