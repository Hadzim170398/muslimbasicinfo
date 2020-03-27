import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RukunislamPage } from './rukunislam.page';

const routes: Routes = [
  {
    path: '',
    component: RukunislamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RukunislamPageRoutingModule {}
