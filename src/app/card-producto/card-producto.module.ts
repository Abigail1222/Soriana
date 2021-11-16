import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProductoComponent } from './card-producto.component';



@NgModule({
  declarations: [CardProductoComponent],
  exports: [CardProductoComponent],
  imports: [
    CommonModule
  ]
})
export class CardProductoModule { }
