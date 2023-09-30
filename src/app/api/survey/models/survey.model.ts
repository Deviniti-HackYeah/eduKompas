import { Chat, Survey } from '@shared/models';

export type SurveyRequest = Survey & {
  chatId: string;
};

export type SurveyResponse = Chat;
