import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { FilterModule } from '../filter/filter.module';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [ProductComponent],
  exports: [ProductComponent],
  imports: [
    CommonModule,
    FilterModule,
    IonicModule
  ]
})
export class ProductModule { }
