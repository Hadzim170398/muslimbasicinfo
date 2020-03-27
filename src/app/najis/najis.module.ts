import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NajisPageRoutingModule } from './najis-routing.module';

import { NajisPage } from './najis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NajisPageRoutingModule
  ],
  declarations: [NajisPage]
})
export class NajisPageModule {}
