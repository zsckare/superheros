import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroePage } from './heroe.page';

const routes: Routes = [
  {
    path: '',
    component: HeroePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroePageRoutingModule {}
