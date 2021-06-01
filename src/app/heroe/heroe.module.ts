import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeroePageRoutingModule } from './heroe-routing.module';

import { HeroePage } from './heroe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeroePageRoutingModule
  ],
  declarations: [HeroePage]
})
export class HeroePageModule {}
