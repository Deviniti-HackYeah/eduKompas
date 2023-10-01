import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'rtm-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  @HostBinding('class') public get classes(): string {
    return 'max-w-screen-2xl block mx-auto h-full py-14';
  }
}
