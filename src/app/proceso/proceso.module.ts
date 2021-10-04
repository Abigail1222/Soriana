import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcesoPageRoutingModule } from './proceso-routing.module';

import { ProcesoPage } from './proceso.page';
import { Toolbar2Component } from '../toolbar2/toolbar2.component';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcesoPageRoutingModule
  ],
  declarations: [ProcesoPage, Toolbar2Component, FooterComponent],
  exports: [Toolbar2Component, FooterComponent]
})
export class ProcesoPageModule {}
