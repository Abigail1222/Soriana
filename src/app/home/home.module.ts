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


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  exports: [ToolbarComponent, FooterComponent, ItemComponent, SearchComponent],
  declarations: [HomePage, ToolbarComponent, FooterComponent, ItemComponent, SearchComponent]
})
export class HomePageModule {}
