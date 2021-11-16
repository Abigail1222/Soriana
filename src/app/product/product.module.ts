import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { FilterModule } from '../filter/filter.module';



@NgModule({
  declarations: [ProductComponent],
  exports: [ProductComponent],
  imports: [
    CommonModule,
    FilterModule
  ]
})
export class ProductModule { }
