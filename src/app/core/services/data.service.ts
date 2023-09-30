import { Injectable, signal } from '@angular/core';
import { Survey } from '@shared/models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public readonly surveyData = signal<Partial<Survey>>({});
}
