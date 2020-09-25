import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // 型付けしたheroes配列を定義
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  // ライフサイクルの中でgetHeroes()メソッドを呼び出す
  ngOnInit(): void {
    this.getHeroes();
  }

  // getHero()メソッドを定義。ヒーローの配列を1番目と5番目でスライスし、トップヒーローの4つだけを返す。
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

}
