import { Component, EventEmitter, HostBinding, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '@core/services/data.service';
import { GreatestSatisfaction } from '@shared/constant';
import { Survey } from '@shared/models';

@Component({
  selector: 'rtm-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss'],
})
export class Step3Component {
  public readonly GREATEST_SATISFACTION = GreatestSatisfaction;

  @Output() public goToChat = new EventEmitter<void>();

  @HostBinding('class') public get classes(): string {
    return 'block mx-auto w-full h-full max-w-screen-xl';
  }

  public step3Form = new FormGroup({
    greatestSatisfaction: new FormControl(undefined, Validators.required),
  });

  constructor(private readonly _dataService: DataService) {}

  public onSubmit(): void {
    if (!this.step3Form.valid) {
      return;
    }
    const formData = this.step3Form.value as unknown as Partial<Survey>;
    this._dataService.surveyData.update((data: Partial<Survey>) => {
      return { ...data, ...formData };
    });
    this.goToChat.emit();
  }
}
