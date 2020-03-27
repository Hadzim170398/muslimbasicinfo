import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhalifahPage } from './khalifah.page';

const routes: Routes = [
  {
    path: '',
    component: KhalifahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhalifahPageRoutingModule {}
