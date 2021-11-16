import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MetodoPageRoutingModule } from './metodo-routing.module';

import { MetodoPage } from './metodo.page';
import { Toolbar2Module } from '../toolbar2/toolbar2.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MetodoPageRoutingModule,
    Toolbar2Module,
    FooterModule
  ],
  declarations: [MetodoPage]
})
export class MetodoPageModule {}
