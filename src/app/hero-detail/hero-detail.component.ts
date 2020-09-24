import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // 親コンポーネントからバインドされたheroを使用できるように@プロパティを使う
  @Input() hero: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
