import { InitialComponent } from './views/initial/initial.component';
import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const COMPONENTS = [InitialComponent];

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class InitialModule {}
