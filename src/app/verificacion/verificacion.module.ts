import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerificacionPageRoutingModule } from './verificacion-routing.module';

import { VerificacionPage } from './verificacion.page';
import { Toolbar2Component } from '../toolbar2/toolbar2.component';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerificacionPageRoutingModule
  ],
  declarations: [VerificacionPage, Toolbar2Component, FooterComponent],
  exports: [Toolbar2Component, FooterComponent]
})
export class VerificacionPageModule {}
