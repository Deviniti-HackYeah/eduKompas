import { Component, EventEmitter, HostBinding, Output } from '@angular/core';

@Component({
  selector: 'rtm-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss'],
})
export class Step2Component {
  @Output() public goToNextStep = new EventEmitter<void>();

  @HostBinding('class') public get classes(): string {
    return 'block mx-auto w-full h-full max-w-screen-xl';
  }
}
