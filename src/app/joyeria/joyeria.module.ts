import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JoyeriaPageRoutingModule } from './joyeria-routing.module';

import { JoyeriaPage } from './joyeria.page';
import { Toolbar2Component} from '../toolbar2/toolbar2.component';
import { FooterComponent } from '../footer/footer.component';
import { FilterComponent } from '../filter/filter.component';
import { ProductComponent } from '../product/product.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JoyeriaPageRoutingModule
  ],
  declarations: [JoyeriaPage, Toolbar2Component, FooterComponent, ProductComponent, FilterComponent],
  exports: [JoyeriaPage, Toolbar2Component, FooterComponent, ProductComponent, FilterComponent]
})
export class JoyeriaPageModule {}
