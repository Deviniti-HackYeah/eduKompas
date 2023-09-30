import { MessageComponent } from './components/message/message.component';
import { GraphComponent } from './containers/graph/graph.component';
import { ChatComponent } from './containers/chat/chat.component';
import { BoardComponent } from './board/board.component';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const COMPONENTS = [
  MessageComponent,
  BoardComponent,
  GraphComponent,
  ChatComponent,
];

@NgModule({
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class BoardModule {}
