import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolatfardhuPage } from './solatfardhu.page';

const routes: Routes = [
  {
    path: '',
    component: SolatfardhuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolatfardhuPageRoutingModule {}
