import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Options } from 'ngx-slider-v2';

@Component({
  selector: 'rtm-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  public readonly SLIDER_OPTIONS: Options = { floor: 0, ceil: 100 };

  @Input() public value: number = 50;
  @Output() public valueChange = new EventEmitter<number>();
}
