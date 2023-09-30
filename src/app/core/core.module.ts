import { InitialComponent } from './containers/initial/initial.component';
import { MessageComponent } from './components/message/message.component';
import { BoardComponent } from './containers/board/board.component';
import { GraphComponent } from './containers/graph/graph.component';
import { ChatComponent } from './containers/chat/chat.component';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './views';
import { NgModule } from '@angular/core';

const COMPONENTS = [DashboardComponent];

@NgModule({
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  declarations: [
    ...COMPONENTS,
    MessageComponent,
    InitialComponent,
    BoardComponent,
    GraphComponent,
    ChatComponent,
  ],
})
export class CoreModule {}
