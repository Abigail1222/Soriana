import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { IonicModule } from '@ionic/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchComponent],
  exports: [SearchComponent],
  imports: [
    CommonModule,
    IonicModule,
    Ng2SearchPipeModule,
    FormsModule
  ]
})
export class SearchModule { }
