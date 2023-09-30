import { ChatRepository } from '@api/chat/chat.repository';
import { Injectable, signal } from '@angular/core';
import { ChatMessage } from '@shared/models';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  public readonly chat = signal<ChatMessage[]>([]);
  private readonly _chatId = uuidv4();

  constructor(private readonly _repo: ChatRepository) {}

  public postMessage(value: string): void {
    this.chat.update((chats) => [
      ...chats,
      {
        bot: 'USER',
        message: value,
        date: new Date(),
      },
    ]);

    this._repo
      .postMessage({ chatId: this._chatId, message: value })
      .subscribe((response) => {
        this.chat.update((chats) => [...chats, ...response.chats]);
      });
  }
}
