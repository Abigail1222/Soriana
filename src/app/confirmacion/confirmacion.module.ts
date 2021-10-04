import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmacionPageRoutingModule } from './confirmacion-routing.module';

import { ConfirmacionPage } from './confirmacion.page';
import { Toolbar2Component } from '../toolbar2/toolbar2.component';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmacionPageRoutingModule
  ],
  declarations: [ConfirmacionPage, Toolbar2Component, FooterComponent],
  exports: [Toolbar2Component, FooterComponent]
})
export class ConfirmacionPageModule {}
