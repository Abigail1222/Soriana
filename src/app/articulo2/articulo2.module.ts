import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Articulo2PageRoutingModule } from './articulo2-routing.module';

import { Articulo2Page } from './articulo2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Articulo2PageRoutingModule
  ],
  declarations: [Articulo2Page]
})
export class Articulo2PageModule {}
