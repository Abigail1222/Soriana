import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProductoComponent } from './card-producto.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [CardProductoComponent],
  exports: [CardProductoComponent],
  imports: [
    CommonModule
  ]
})
export class CardProductoModule { }
