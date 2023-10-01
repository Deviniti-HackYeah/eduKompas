import { SurveyRepository } from '@api/survey/survey.repository';
import { ChatExtras, ChatMessage, Survey } from '@shared/models';
import { ChatRepository } from '@api/chat/chat.repository';
import { mockedAnswerBySurvey } from '@shared/utils';
import { Injectable, signal } from '@angular/core';
import { SPEECH_SPEED } from '@core/constant';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  public readonly extras = signal<Partial<ChatExtras> | undefined>(undefined);
  public readonly surveyData = signal<Partial<Survey>>({});
  public readonly isLoading = signal<boolean>(false);
  public readonly chat = signal<ChatMessage[]>([]);

  private _initialMessageSent = false;
  private readonly _chatId = uuidv4();

  constructor(
    private readonly _surveyRepo: SurveyRepository,
    private readonly _chatRepo: ChatRepository,
  ) {}

  public postInitialMessage(): void {
    const message: ChatMessage = {
      message: mockedAnswerBySurvey(this.surveyData().greatestSatisfaction),
      date: new Date(),
      bot: 'KARA',
    };
    this._updateChatMessages(message);
  }

  public postMessage(value: string): void {
    if (!this._initialMessageSent) {
      this._postSurvey(value);
      this._initialMessageSent = true;
      return;
    }

    this._updateChatMessages({ bot: 'USER', message: value, date: new Date() });

    this.isLoading.update(() => true);

    this._chatRepo
      .postMessage({ chatId: this._chatId, message: value })
      .subscribe({
        next: (response) => {
          this._updateChatMessages(response.chats);
          this.extras.update(() => response.extras);
          this.isLoading.update(() => false);
        },
        error: () => {
          this.isLoading.update(() => false);
        },
      });
  }

  private _postSurvey(strengths: string): void {
    this._updateChatMessages({
      bot: 'USER',
      message: strengths,
      date: new Date(),
    });
    this.isLoading.update(() => true);
    this._surveyRepo
      .postSurvey({ ...this.surveyData(), strengths, chatId: this._chatId })
      .subscribe({
        next: (response) => {
          this._updateChatMessages(response.chats);
          this.extras.update(() => response.extras);
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
