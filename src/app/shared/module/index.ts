import {
  SpinnerComponent,
  ButtonDirective,
  InputDirective,
} from '@shared/components';
import { VarDirective, TypewriteDirective } from '@shared/directives';
import { LocalizedDatePipe, TruncatePipe } from '@shared/pipes';
import { TranslateModule } from '@ngx-translate/core';

export const SHARED_DIRECTIVES = [
  TypewriteDirective,
  ButtonDirective,
  InputDirective,
  VarDirective,
];

export const SHARED_PIPES = [TruncatePipe, LocalizedDatePipe];

export const SHARED_COMPONENTS = [SpinnerComponent];

export const SHARED_MODULES = [TranslateModule];
