import {
  SHARED_COMPONENTS,
  SHARED_DIRECTIVES,
  SHARED_MODULES,
  SHARED_PIPES,
} from './module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [...SHARED_DIRECTIVES, ...SHARED_COMPONENTS, ...SHARED_PIPES, SpinnerComponent],
  imports: [CommonModule, ...SHARED_MODULES],
  exports: [
    ...SHARED_DIRECTIVES,
    ...SHARED_COMPONENTS,
    ...SHARED_MODULES,
    ...SHARED_PIPES,
  ],
})
export class SharedModule {}
