import { Author } from '../author.type';

export interface Chat {
  chats: ChatMessage[];
  extras?: any;
}

export interface ChatMessage {
  bot: Author;
  message: string;
  date: Date;
}
