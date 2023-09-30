import { VarDirective, TypewriteDirective } from '@shared/directives';
import { LocalizedDatePipe, TruncatePipe } from '@shared/pipes';
import { TranslateModule } from '@ngx-translate/core';
import { SpinnerComponent } from '@shared/components';

export const SHARED_DIRECTIVES = [TypewriteDirective, VarDirective];

export const SHARED_PIPES = [TruncatePipe, LocalizedDatePipe];

export const SHARED_COMPONENTS = [SpinnerComponent];

export const SHARED_MODULES = [TranslateModule];
