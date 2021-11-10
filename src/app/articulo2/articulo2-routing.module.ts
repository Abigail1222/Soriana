import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Articulo2Page } from './articulo2.page';

const routes: Routes = [
  {
    path: '',
    component: Articulo2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Articulo2PageRoutingModule {}
