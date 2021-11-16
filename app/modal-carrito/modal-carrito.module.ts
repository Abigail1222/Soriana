import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCarritoPageRoutingModule } from './modal-carrito-routing.module';

import { ModalCarritoPage } from './modal-carrito.page';
import { CardProductoModule } from '../card-producto/card-producto.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCarritoPageRoutingModule,
    CardProductoModule
  ],
  declarations: [ModalCarritoPage]
})
export class ModalCarritoPageModule {}
