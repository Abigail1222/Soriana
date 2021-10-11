import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResumenPageRoutingModule } from './resumen-routing.module';

import { ResumenPage } from './resumen.page';
import { Toolbar2Component } from '../toolbar2/toolbar2.component';
import { FooterComponent } from '../footer/footer.component';
import { CardProductoComponent } from '../card-producto/card-producto.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResumenPageRoutingModule
  ],
  declarations: [ResumenPage, Toolbar2Component, FooterComponent, CardProductoComponent],
  exports: [Toolbar2Component, FooterComponent, CardProductoComponent]
})
export class ResumenPageModule {}
