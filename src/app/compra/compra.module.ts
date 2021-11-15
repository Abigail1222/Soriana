import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompraPageRoutingModule } from './compra-routing.module';

import { CompraPage } from './compra.page';
import { Toolbar2Component } from '../toolbar2/toolbar2.component';
import { FooterComponent } from '../footer/footer.component';
import { CardProductoComponent } from '../card-producto/card-producto.component';
import { AppModule } from '../app.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompraPageRoutingModule,
    AppModule
  ],
  declarations: [CompraPage, Toolbar2Component, FooterComponent, CardProductoComponent],
  exports: [Toolbar2Component, FooterComponent, CardProductoComponent]
  
})
export class CompraPageModule {}
