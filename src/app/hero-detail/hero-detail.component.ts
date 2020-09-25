import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// locationはブラウザと対話するためのAngularサービス
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // 親コンポーネントからバインドされたheroを使用できるように@プロパティを使う
  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    // locationサービスを利用してブラウザの1つ前の画面に戻るメソッドを定義
    this.location.back();
  }

}
