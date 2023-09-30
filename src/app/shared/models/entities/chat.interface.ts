import { Bot } from '../bot.type';

export interface Chat {
  chats: ChatMessage[];
  extras?: any;
}

export interface ChatMessage {
  bot: Bot;
  message: string;
  date: Date;
}
