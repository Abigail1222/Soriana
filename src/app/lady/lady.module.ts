import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LadyPageRoutingModule } from './lady-routing.module';

import { LadyPage } from './lady.page';
import { Toolbar2Component } from '../toolbar2/toolbar2.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductComponent } from '../product/product.component';
import { FilterComponent } from '../filter/filter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LadyPageRoutingModule
  ],
  declarations: [LadyPage, Toolbar2Component, FooterComponent, ProductComponent, FilterComponent],
  exports: [LadyPage, Toolbar2Component, FooterComponent, ProductComponent, FilterComponent]
})
export class LadyPageModule {}
