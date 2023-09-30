import { Chat } from '@shared/models';

export interface SurveyRequest {
  message: string;
  chatId: string;
}

export type SurveyResponse = Chat;
