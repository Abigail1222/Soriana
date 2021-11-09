import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaballeroPageRoutingModule } from './caballero-routing.module';

import { CaballeroPage } from './caballero.page';
import { Toolbar2Component } from '../toolbar2/toolbar2.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductComponent } from '../product/product.component';
import { FilterComponent } from '../filter/filter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaballeroPageRoutingModule
  ],
  declarations: [CaballeroPage, Toolbar2Component, FooterComponent, ProductComponent, FilterComponent],
  exports: [CaballeroPage, Toolbar2Component, FooterComponent, ProductComponent, FilterComponent]
})
export class CaballeroPageModule {}
