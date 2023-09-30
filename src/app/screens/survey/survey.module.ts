import { Step1Component } from './containers/step1/step1.component';
import { Step2Component } from './containers/step2/step2.component';
import { SurveyComponent } from './views/survey/survey.component';
import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const COMPONENTS = [SurveyComponent, Step1Component, Step2Component];

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class SurveyModule {}
