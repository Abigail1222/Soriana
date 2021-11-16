import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperacionPageRoutingModule } from './recuperacion-routing.module';

import { RecuperacionPage } from './recuperacion.page';
import { Toolbar2Module } from '../toolbar2/toolbar2.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperacionPageRoutingModule,
    Toolbar2Module,
    FooterModule
  ],
  declarations: [RecuperacionPage]
})
export class RecuperacionPageModule {}
