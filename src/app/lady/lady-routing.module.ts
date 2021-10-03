import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LadyPage } from './lady.page';

const routes: Routes = [
  {
    path: '',
    component: LadyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LadyPageRoutingModule {}
