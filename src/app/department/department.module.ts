import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepartmentPageRoutingModule } from './department-routing.module';

import { DepartmentPage } from './department.page';
import { Toolbar2Component } from '../toolbar2/toolbar2.component';
import { FooterComponent } from '../footer/footer.component';
import { Item2Component } from '../item2/item2.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DepartmentPageRoutingModule
  ],
  exports: [DepartmentPage, Toolbar2Component, FooterComponent, Item2Component,ToolbarComponent, MenuComponent],
  declarations: [DepartmentPage, Toolbar2Component, FooterComponent, Item2Component, ToolbarComponent, MenuComponent]
})
export class DepartmentPageModule {}
