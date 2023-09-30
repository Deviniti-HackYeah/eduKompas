import { Chat } from '@shared/models';

export interface ChatRequest {
  message: string;
}

export type ChatResponse = Chat;
