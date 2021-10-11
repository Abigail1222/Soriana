import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCarritoPageRoutingModule } from './modal-carrito-routing.module';

import { ModalCarritoPage } from './modal-carrito.page';
import { CardProductoComponent } from '../card-producto/card-producto.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCarritoPageRoutingModule
  ],
  declarations: [ModalCarritoPage, CardProductoComponent],
  exports: [CardProductoComponent]
})
export class ModalCarritoPageModule {}
