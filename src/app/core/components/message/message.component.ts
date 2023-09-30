import { Component, HostBinding, Input } from '@angular/core';
import { Bot } from '@shared/models';

@Component({
  selector: 'rtm-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
  @Input() public message?: string;
  @Input() public direction?: 'left' | 'right' = 'right';
  @Input() public type?: Bot | 'USER' = 'USER';

  @HostBinding('class') public get classes(): string {
    const align = this.direction === 'left' ? 'justify-start' : 'justify-end';
    return ['flex', 'mb-2', align].join(' ');
  }
}
