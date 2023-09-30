import { ChatRequest, ChatResponse } from './models';
import { API_URL } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ChatRepository {
  constructor(private readonly _http: HttpClient) {}

  public postMessage(data: ChatRequest): Observable<ChatResponse> {
    return this._http.post<ChatResponse>(`${API_URL}/chat`, data);
  }
}
