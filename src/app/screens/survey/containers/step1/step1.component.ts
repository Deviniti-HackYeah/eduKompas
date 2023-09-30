import { Component, EventEmitter, HostBinding, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EducationType, UserType } from '@shared/constant';

@Component({
  selector: 'rtm-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
})
export class Step1Component {
  public readonly UserTypeOptions = UserType;
  public readonly EducationTypeOptions = EducationType.map((t) => ({
    label: t,
    value: t,
  }));

  @Output() public goToNextStep = new EventEmitter<void>();

  @HostBinding('class') public get classes(): string {
    return 'block mx-auto w-full h-full max-w-screen-xl';
  }

  public step1Form = new FormGroup({
    userType: new FormControl(undefined, Validators.required),
    educationType: new FormControl(undefined, Validators.required),
    city: new FormControl('', Validators.required),
  });
}
