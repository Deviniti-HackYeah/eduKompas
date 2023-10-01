import { MessageComponent } from './components/message/message.component';
import { GraphComponent } from './containers/graph/graph.component';
import { ChatComponent } from './containers/chat/chat.component';
import { BoardComponent } from './views/board/board.component';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { EndMessageComponent } from './components/end-message/end-message.component';

const COMPONENTS = [
  MessageComponent,
  BoardComponent,
  GraphComponent,
  ChatComponent,
];

@NgModule({
  imports: [
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    ReactiveFormsModule,
    InputTextModule,
    SharedModule,
    CommonModule,
    ButtonModule,
  ],
  declarations: [...COMPONENTS, EndMessageComponent],
  exports: [...COMPONENTS],
})
export class BoardModule {}
