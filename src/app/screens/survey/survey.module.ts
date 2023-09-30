import { SliderOptionComponent } from './components/slider-option/slider-option.component';
import { SliderComponent } from './components/slider/slider.component';
import { Step1Component } from './containers/step1/step1.component';
import { Step2Component } from './containers/step2/step2.component';
import { Step3Component } from './containers/step3/step3.component';
import { SurveyComponent } from './views/survey/survey.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { NgxSliderModule } from 'ngx-slider-v2';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';

const COMPONENTS = [
  SliderOptionComponent,
  SliderComponent,
  SurveyComponent,
  Step1Component,
  Step2Component,
  Step3Component,
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    RadioButtonModule,
    InputTextModule,
    NgxSliderModule,
    DropdownModule,
    SharedModule,
    CommonModule,
    ButtonModule,
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class SurveyModule {}
