import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // 変数heroesをHero[]配列として型付け
  heroes: Hero[];

  selectedHero: Hero;

  // サービスのgetHeroes()メソッドの配列データをこのコンポーネントのheroesに代入するメソッドを定義
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    // this.heroes = this.heroService.getHeroes();
  }

  constructor(private heroService: HeroService) { }

  // angularがインスタンスを生成した適切なタイミングでメソッドを呼び出す
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
