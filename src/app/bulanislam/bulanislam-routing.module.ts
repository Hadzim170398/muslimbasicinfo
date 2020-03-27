import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BulanislamPage } from './bulanislam.page';

const routes: Routes = [
  {
    path: '',
    component: BulanislamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BulanislamPageRoutingModule {}
