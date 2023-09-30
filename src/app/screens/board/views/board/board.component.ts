import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'rtm-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  @HostBinding('class') public get classes(): string {
    return 'flex h-full gap-8 p-14';
  }
}
