import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }
  
  // mock-heroesの配列を返すメソッド
  getHeroes(): Observable<Hero[]> {
    // ヒーローが取得されたときにメッセージを送信
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

}
