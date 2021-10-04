import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResumenPageRoutingModule } from './resumen-routing.module';

import { ResumenPage } from './resumen.page';
import { Toolbar2Component } from '../toolbar2/toolbar2.component';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResumenPageRoutingModule
  ],
  declarations: [ResumenPage, Toolbar2Component, FooterComponent],
  exports: [Toolbar2Component, FooterComponent]
})
export class ResumenPageModule {}
