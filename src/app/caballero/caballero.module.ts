import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaballeroPageRoutingModule } from './caballero-routing.module';

import { CaballeroPage } from './caballero.page';

import { Toolbar2Module } from '../toolbar2/toolbar2.module';
import { FooterModule } from '../footer/footer.module';
import { FilterModule } from '../filter/filter.module';
import { ProductModule } from '../product/product.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaballeroPageRoutingModule,
    Toolbar2Module,
    FooterModule,
    ProductModule,
    FilterModule
  ],
  declarations: [CaballeroPage]
})
export class CaballeroPageModule {}
