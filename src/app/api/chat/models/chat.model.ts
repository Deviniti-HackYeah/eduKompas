import { Chat } from '@shared/models';

export interface ChatRequest {
  message: string;
  chatId: string;
}

export type ChatResponse = Chat;
