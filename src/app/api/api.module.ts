import { ChatRepository } from './chat/chat.repository';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const REPOSITORIES = [ChatRepository];

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [...REPOSITORIES],
})
export class ApiModule {}
