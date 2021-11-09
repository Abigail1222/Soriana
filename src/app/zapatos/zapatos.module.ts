import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZapatosPageRoutingModule } from './zapatos-routing.module';

import { ZapatosPage } from './zapatos.page';
import { Toolbar2Component } from '../toolbar2/toolbar2.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductComponent } from '../product/product.component';
import { FilterComponent } from '../filter/filter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZapatosPageRoutingModule
  ],
  declarations: [ZapatosPage, Toolbar2Component, FooterComponent, ProductComponent, FilterComponent],
  exports: [ZapatosPage, Toolbar2Component, FooterComponent, ProductComponent, FilterComponent]
})
export class ZapatosPageModule {}
