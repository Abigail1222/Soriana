import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerificacionPageRoutingModule } from './verificacion-routing.module';

import { VerificacionPage } from './verificacion.page';
import { Toolbar2Module } from '../toolbar2/toolbar2.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerificacionPageRoutingModule,
    Toolbar2Module,
    FooterModule
  ],
  declarations: [VerificacionPage]
})
export class VerificacionPageModule {}
