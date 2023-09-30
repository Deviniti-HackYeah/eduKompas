import { Component, EventEmitter, HostBinding, Output } from '@angular/core';

@Component({
  selector: 'rtm-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss'],
})
export class InitialComponent {
  @Output() public goToSurvey = new EventEmitter<void>();

  @HostBinding('class') public get classes(): string {
    return 'block mx-auto w-full h-full max-w-screen-xl';
  }
}
