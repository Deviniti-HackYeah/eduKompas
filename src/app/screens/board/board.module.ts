import { MessageComponent } from './components/message/message.component';
import { GraphComponent } from './containers/graph/graph.component';
import { ChatComponent } from './containers/chat/chat.component';
import { BoardComponent } from './views/board/board.component';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';

const COMPONENTS = [
  MessageComponent,
  BoardComponent,
  GraphComponent,
  ChatComponent,
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    SharedModule,
    CommonModule,
    ButtonModule,
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class BoardModule {}
