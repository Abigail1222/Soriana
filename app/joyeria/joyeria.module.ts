import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JoyeriaPageRoutingModule } from './joyeria-routing.module';

import { JoyeriaPage } from './joyeria.page';
import { Toolbar2Module } from '../toolbar2/toolbar2.module';
import { FooterModule } from '../footer/footer.module';
import { ProductModule } from '../product/product.module';
import { FilterModule } from '../filter/filter.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JoyeriaPageRoutingModule,
    Toolbar2Module,
    FooterModule,
    ProductModule,
    FilterModule
  ],
  declarations: [JoyeriaPage]
})
export class JoyeriaPageModule {}
