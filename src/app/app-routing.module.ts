import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {  DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  // パスが空なら'./dashboard'のルートにリダイレクト
  { path: '', redirectTo: './dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
];

@NgModule({
  // forRootメソッドがルーティングに必要なサービス、プロバイダーとディレクティブを提供
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
