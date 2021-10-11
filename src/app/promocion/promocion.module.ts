import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PromocionPageRoutingModule } from './promocion-routing.module';

import { PromocionPage } from './promocion.page';
import { Toolbar2Component } from '../toolbar2/toolbar2.component';
import { FooterComponent } from '../footer/footer.component';
import { CardProductoComponent } from '../card-producto/card-producto.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromocionPageRoutingModule
  ],
  declarations: [PromocionPage, Toolbar2Component, FooterComponent, CardProductoComponent],
  exports: [Toolbar2Component, FooterComponent, CardProductoComponent]
})
export class PromocionPageModule {}
