import { DashboardComponent, NotFoundComponent } from './views';
import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const COMPONENTS = [DashboardComponent, NotFoundComponent];

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [...COMPONENTS],
})
export class CoreModule {}
