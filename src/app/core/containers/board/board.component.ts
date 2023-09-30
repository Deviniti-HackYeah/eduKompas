import { Component, Host, HostBinding } from '@angular/core';

@Component({
  selector: 'rtm-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  @HostBinding('class') public get classes(): string {
    return 'flex p-14 gap-8 h-full';
  }
}
