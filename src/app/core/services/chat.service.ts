import { ChatRepository } from '@api/chat/chat.repository';
import { Injectable, signal } from '@angular/core';
import { SPEECH_SPEED } from '@core/constant';
import { ChatMessage } from '@shared/models';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  public readonly chat = signal<ChatMessage[]>([]);
  public readonly isLoading = signal<boolean>(false);
  private readonly _chatId = uuidv4();

  constructor(private readonly _repo: ChatRepository) {}

  public postMessage(value: string): void {
    this._updateChatMessages({ bot: 'USER', message: value, date: new Date() });

    this.isLoading.update(() => true);

    this._repo.postMessage({ chatId: this._chatId, message: value }).subscribe({
      next: (response) => {
        this._updateChatMessages(response.chats);
        this.isLoading.update(() => false);
      },
      error: () => {
        this.isLoading.update(() => false);
      },
    });
  }

  private _updateChatMessages(messages: ChatMessage[] | ChatMessage): void {
    if (Array.isArray(messages)) {
      messages.forEach((message, index) => {
        setTimeout(
          () => {
            this.chat.update((chats) => {
              return [...chats, message];
            });
          },
          index * message.message.length * SPEECH_SPEED,
        );
      });
      return;
    }
    this.chat.update((chats) => {
      return [...chats, messages];
    });
  }
}
