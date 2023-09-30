import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'rtm-slider-option',
  templateUrl: './slider-option.component.html',
  styleUrls: ['./slider-option.component.scss'],
})
export class SliderOptionComponent {
  @Input() public title: string = '';
  @Input() public completed: boolean = false;
  @Output() public valueChange = new EventEmitter<number>();
}
