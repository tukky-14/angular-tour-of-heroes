import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  // 変数heroesをHero[]配列として型付け
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  // angularがインスタンスを生成した適切なタイミングでメソッドを呼び出す
  ngOnInit(): void {
    this.getHeroes();
  }

  // サービスのgetHeroes()メソッドの配列データをこのコンポーネントのheroesに代入するメソッドを定義
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  add(name: string):void {
    name = name.trim();
    // 名前が空でなければaddHeroメソッドで新しいヒーロー名を登録
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
