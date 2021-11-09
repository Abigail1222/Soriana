import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZapatosPage } from './zapatos.page';

const routes: Routes = [
  {
    path: '',
    component: ZapatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZapatosPageRoutingModule {}
