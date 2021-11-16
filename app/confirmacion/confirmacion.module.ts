import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmacionPageRoutingModule } from './confirmacion-routing.module';

import { ConfirmacionPage } from './confirmacion.page';
import { Toolbar2Module } from '../toolbar2/toolbar2.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmacionPageRoutingModule,
    Toolbar2Module,
    FooterModule
  ],
  declarations: [ConfirmacionPage]
})
export class ConfirmacionPageModule {}
