import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RukunimanPage } from './rukuniman.page';

const routes: Routes = [
  {
    path: '',
    component: RukunimanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RukunimanPageRoutingModule {}
