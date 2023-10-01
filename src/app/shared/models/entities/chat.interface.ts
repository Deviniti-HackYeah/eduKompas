import { Author } from '../author.type';

export interface Chat {
  chats: ChatMessage[];
  extras?: ChatExtras;
}

export interface ChatMessage {
  bot: Author;
  message: string;
  date: Date;
}

export interface ChatExtras {
  kierunki_studiow?: string[];
  miasta?: Record<string, string[]>;
  zawody?: string[];
}
