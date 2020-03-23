import { Injectable } from '@angular/core';
import { NoticeMessages } from 'src/app/types/notice-messages/notice-messages';

@Injectable()
export class NoticeDataService {
  public messages: NoticeMessages = {
    emptyRequest: 'введите запрос',
    error: 'произошла ошибка',
    emptyResponse: 'не нашлось такого репозитория'
  };
}
