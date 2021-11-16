import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item2Component } from './item2.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [Item2Component],
  exports: [Item2Component],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class Item2Module { }
