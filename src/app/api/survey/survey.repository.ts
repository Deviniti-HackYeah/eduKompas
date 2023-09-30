import { SurveyRequest, SurveyResponse } from './models';
import { API_URL } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ChatRepository {
  constructor(private readonly _http: HttpClient) {}

  public postSurvey(data: SurveyRequest): Observable<SurveyResponse> {
    return this._http.post<SurveyResponse>(`${API_URL}/chat`, data);
  }
}
