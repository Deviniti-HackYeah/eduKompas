import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './views';
import { NgModule } from '@angular/core';
import { InitialComponent } from './containers/initial/initial.component';
import { BoardComponent } from './containers/board/board.component';
import { ChatComponent } from './containers/chat/chat.component';
import { GraphComponent } from './containers/graph/graph.component';
import { MessageComponent } from './components/message/message.component';

const COMPONENTS = [DashboardComponent];

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [...COMPONENTS, InitialComponent, BoardComponent, ChatComponent, GraphComponent, MessageComponent],
})
export class CoreModule {}
