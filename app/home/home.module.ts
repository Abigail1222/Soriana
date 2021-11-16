import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ItemComponent } from '../item/item.component';
import { SearchComponent } from '../search/search.component';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { FooterModule } from '../footer/footer.module';
import { ItemModule } from '../item/item.module';
import { SearchModule } from '../search/search.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ToolbarModule,
    FooterModule,
    ItemModule,
    SearchModule
  ],
  
  declarations: [HomePage]
})
export class HomePageModule {}
