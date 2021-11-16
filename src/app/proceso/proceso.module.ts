import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcesoPageRoutingModule } from './proceso-routing.module';

import { ProcesoPage } from './proceso.page';
import { Toolbar2Module } from '../toolbar2/toolbar2.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcesoPageRoutingModule,
    Toolbar2Module,
    FooterModule
  ],
  declarations: [ProcesoPage]
})
export class ProcesoPageModule {}
