import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NajisPage } from './najis.page';

const routes: Routes = [
  {
    path: '',
    component: NajisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NajisPageRoutingModule {}
