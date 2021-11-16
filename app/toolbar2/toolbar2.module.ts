import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Toolbar2Component } from './toolbar2.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [Toolbar2Component],
  exports: [Toolbar2Component],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class Toolbar2Module { }
