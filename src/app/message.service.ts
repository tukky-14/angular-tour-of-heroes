import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  // 新たなメッセージをmessagesに追加
  add(message: string) {
    this.messages.push(message);
  }

  // messagesの値を初期化
  clear() {
    this.messages = [];
  }
}
