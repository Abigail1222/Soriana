import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrutaVerduraPage } from './fruta-verdura.page';

const routes: Routes = [
  {
    path: '',
    component: FrutaVerduraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrutaVerduraPageRoutingModule {}
