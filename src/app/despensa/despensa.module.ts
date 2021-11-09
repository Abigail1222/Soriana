import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DespensaPageRoutingModule } from './despensa-routing.module';

import { DespensaPage } from './despensa.page';
import { Toolbar2Component } from '../toolbar2/toolbar2.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductComponent } from '../product/product.component';
import { FilterComponent } from '../filter/filter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DespensaPageRoutingModule
  ],
  declarations: [DespensaPage,  Toolbar2Component, FooterComponent, ProductComponent, FilterComponent],
  exports: [DespensaPage, Toolbar2Component, FooterComponent, ProductComponent, FilterComponent]
})
export class DespensaPageModule {}
