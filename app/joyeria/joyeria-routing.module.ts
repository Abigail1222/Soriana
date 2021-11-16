import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JoyeriaPage } from './joyeria.page';

const routes: Routes = [
  {
    path: '',
    component: JoyeriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JoyeriaPageRoutingModule {}
