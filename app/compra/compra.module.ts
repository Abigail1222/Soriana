import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompraPageRoutingModule } from './compra-routing.module';

import { CompraPage } from './compra.page';
import { Toolbar2Component } from '../toolbar2/toolbar2.component';
import { FooterComponent } from '../footer/footer.component';
import { CardProductoComponent } from '../card-producto/card-producto.component';
import { Toolbar2Module } from '../toolbar2/toolbar2.module';
import { CardProductoModule } from '../card-producto/card-producto.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompraPageRoutingModule,
    Toolbar2Module,
    CardProductoModule,
    FooterModule
  ],
  declarations: [CompraPage]
  
})
export class CompraPageModule {}
