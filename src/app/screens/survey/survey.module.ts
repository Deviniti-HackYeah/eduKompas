import { Step1Component } from './containers/step1/step1.component';
import { Step2Component } from './containers/step2/step2.component';
import { SurveyComponent } from './views/survey/survey.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';

const COMPONENTS = [SurveyComponent, Step1Component, Step2Component];

@NgModule({
  imports: [
    ReactiveFormsModule,
    RadioButtonModule,
    InputTextModule,
    DropdownModule,
    SharedModule,
    CommonModule,
    ButtonModule,
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class SurveyModule {}
