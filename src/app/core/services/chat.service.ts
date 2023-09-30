import { SurveyRepository } from '@api/survey/survey.repository';
import { ChatRepository } from '@api/chat/chat.repository';
import { ChatMessage, Survey } from '@shared/models';
import { Injectable, signal } from '@angular/core';
import { SPEECH_SPEED } from '@core/constant';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  public readonly surveyData = signal<Partial<Survey>>({});
  public readonly isLoading = signal<boolean>(false);
  public readonly chat = signal<ChatMessage[]>([]);

  private readonly _chatId = uuidv4();

  constructor(
    private readonly _surveyRepo: SurveyRepository,
    private readonly _chatRepo: ChatRepository,
  ) {}

  public postSurvey(): void {
    this.isLoading.update(() => true);
    this._surveyRepo
      .postSurvey({ ...this.surveyData(), chatId: this._chatId })
      .subscribe({
        next: (response) => {
          this._updateChatMessages(response.chats);
          this.isLoading.update(() => false);
        },
        error: () => {
          this.isLoading.update(() => false);
        },
      });
  }

  public postMessage(value: string): void {
    this._updateChatMessages({ bot: 'USER', message: value, date: new Date() });

    this.isLoading.update(() => true);

    this._chatRepo
      .postMessage({ chatId: this._chatId, message: value })
      .subscribe({
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
