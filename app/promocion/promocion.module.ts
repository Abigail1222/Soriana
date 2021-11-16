import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PromocionPageRoutingModule } from './promocion-routing.module';

import { PromocionPage } from './promocion.page';
import { FooterModule } from '../footer/footer.module';
import { CardProductoModule } from '../card-producto/card-producto.module';
import { Toolbar2Module } from '../toolbar2/toolbar2.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromocionPageRoutingModule,
    FooterModule,
    CardProductoModule,
    Toolbar2Module
  ],
  declarations: [PromocionPage]
})
export class PromocionPageModule {}
