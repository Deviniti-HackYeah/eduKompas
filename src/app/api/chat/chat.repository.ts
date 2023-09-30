import { ChatRequest, ChatResponse } from './models';
import { API_URL } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const MOCK: ChatResponse = {
  chats: [
    {
      bot: 'KAJTEK',
      message: Math.random() > 0.5 ? 'Hi Kara' : 'Hello Kara',
      date: new Date(),
    },
    {
      bot: 'KARA',
      message: Math.random() > 0.5 ? 'Hi Kajtek' : 'Hello Kajtek',
      date: new Date(),
    },
  ],
};

@Injectable()
export class ChatRepository {
  constructor(private readonly _http: HttpClient) {}

  // export interface Chat {
  //   chats: ChatMessage[];
  //   extras?: any;
  // }

  // export interface ChatMessage {
  //   bot: Bot;
  //   message: string;
  //   date: Date;
  // }

  public postMessage(value: ChatRequest): Observable<ChatResponse> {
    return of(MOCK);
    // return this._http.get<ChatResponse>(`${API_URL}/chat`);
  }
}
