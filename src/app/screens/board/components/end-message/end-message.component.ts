import {
  EventEmitter,
  HostBinding,
  Component,
  Input,
  Output,
} from '@angular/core';
import { ChatService } from '@core/services/chat.service';
import { SPEECH_SPEED } from '@core/constant';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'rtm-end-message',
  templateUrl: './end-message.component.html',
  styleUrls: ['./end-message.component.scss'],
})
export class EndMessageComponent {
  public readonly TEXT_SPEED = SPEECH_SPEED;
  public isEndingKajtek = false;
  public isEndingKara = false;

  @HostBinding('class') public readonly classes = 'flex flex-col gap-4';

  @Output() public notInactive = new EventEmitter<void>();
  @Input() public isInactive = true;

  constructor(
    private readonly _messageService: MessageService,
    private readonly _chatService: ChatService,
  ) {}

  public setEnding(): void {
    this.isEndingKajtek = true;
    setTimeout(() => {
      this.isEndingKara = true;
    }, 4000);
  }

  public onRateClick(): void {
    this._messageService.add({
      severity: 'success',
      summary: 'Dziękujemy!',
      detail: 'Twoja ocena przyczyni się do poprawy jakości naszego portalu.',
    });
  }

  public getReport(): void {
    const data = this._chatService.chat();
    const text = JSON.stringify(data);

    const element = document.createElement('a');
    element.setAttribute(
      'href',
      'data:text/plain;charset=utf-8,' + encodeURIComponent(text),
    );
    element.setAttribute('download', 'eduKompas+.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
}
