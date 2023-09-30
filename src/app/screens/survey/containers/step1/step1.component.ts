import { Component, EventEmitter, HostBinding, Output } from '@angular/core';

@Component({
  selector: 'rtm-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
})
export class Step1Component {
  @Output() public goToNextStep = new EventEmitter<void>();

  @HostBinding('class') public get classes(): string {
    return 'block mx-auto w-full h-full max-w-screen-xl';
  }
}
