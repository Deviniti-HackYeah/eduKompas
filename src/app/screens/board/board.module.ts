import { EndMessageComponent } from './components/end-message/end-message.component';
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
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { NgModule } from '@angular/core';

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
    ToastModule,
  ],
  declarations: [...COMPONENTS, EndMessageComponent],
  providers: [MessageService],
  exports: [...COMPONENTS],
})
export class BoardModule {}
