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
import { FooterModule } from '../footer/footer.module';
import { Item2Module } from '../item2/item2.module';
import { Toolbar2Module } from '../toolbar2/toolbar2.module';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DepartmentPageRoutingModule,
    FooterModule,
    Item2Module,
    Toolbar2Module,
    MenuModule
  ],
  
  declarations: [DepartmentPage]
})
export class DepartmentPageModule {}
