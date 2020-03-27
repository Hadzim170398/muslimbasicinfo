import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WudukPage } from './wuduk.page';

const routes: Routes = [
  {
    path: '',
    component: WudukPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WudukPageRoutingModule {}
