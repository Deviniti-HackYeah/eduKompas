import { ButtonDirective, InputDirective } from '@shared/components';
import { LocalizedDatePipe, TruncatePipe } from '@shared/pipes';
import { TranslateModule } from '@ngx-translate/core';
import { VarDirective } from '@shared/directives';

export const SHARED_DIRECTIVES = [
  ButtonDirective,
  InputDirective,
  VarDirective,
];

export const SHARED_PIPES = [TruncatePipe, LocalizedDatePipe];

export const SHARED_COMPONENTS = [];

export const SHARED_MODULES = [TranslateModule];
