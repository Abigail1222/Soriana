import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FarmaciaPageRoutingModule } from './farmacia-routing.module';

import { FarmaciaPage } from './farmacia.page';
import { Toolbar2Component } from '../toolbar2/toolbar2.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductComponent } from '../product/product.component';
import { FilterComponent } from '../filter/filter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FarmaciaPageRoutingModule
  ],
  declarations: [FarmaciaPage, Toolbar2Component, FooterComponent, ProductComponent, FilterComponent],
  exports: [FarmaciaPage, Toolbar2Component, FooterComponent, ProductComponent, FilterComponent]
})
export class FarmaciaPageModule {}
