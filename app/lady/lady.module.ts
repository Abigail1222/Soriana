import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LadyPageRoutingModule } from './lady-routing.module';

import { LadyPage } from './lady.page';
import { Toolbar2Module } from '../toolbar2/toolbar2.module';
import { FooterModule } from '../footer/footer.module';
import { ProductModule } from '../product/product.module';
import { FilterModule } from '../filter/filter.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LadyPageRoutingModule,
    Toolbar2Module,
    FooterModule,
    ProductModule,
    FilterModule
  ],
  declarations: [LadyPage]
})
export class LadyPageModule {}
