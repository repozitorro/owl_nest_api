import { TelegramOptions } from '../telegram/telegram.interface';
import { ConfigService } from '@nestjs/config';

export const getTelegramConfig = (
  configService: ConfigService,
): TelegramOptions => {
  const token = configService.get('TELEGRAM_TOKEN');
  if (!token) {
    throw new Error('Telegram token not found');
  }
  return {
    token,
    chatId: configService.get('CHAT_ID') ?? '',
  };
};
