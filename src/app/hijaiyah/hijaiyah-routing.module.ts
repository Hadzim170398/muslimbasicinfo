import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HijaiyahPage } from './hijaiyah.page';

const routes: Routes = [
  {
    path: '',
    component: HijaiyahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HijaiyahPageRoutingModule {}
