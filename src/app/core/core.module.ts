import { InitialModule } from '@screens/initial/initial.module';
import { SurveyModule } from '@screens/survey/survey.module';
import { BoardModule } from '@screens/board/board.module';
import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './views';
import { NgModule } from '@angular/core';

const COMPONENTS = [DashboardComponent];

@NgModule({
  imports: [
    InitialModule,
    CommonModule,
    SurveyModule,
    SharedModule,
    BoardModule,
  ],
  declarations: [...COMPONENTS],
})
export class CoreModule {}
