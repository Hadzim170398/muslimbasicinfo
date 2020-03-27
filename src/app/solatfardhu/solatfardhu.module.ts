import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolatfardhuPageRoutingModule } from './solatfardhu-routing.module';

import { SolatfardhuPage } from './solatfardhu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolatfardhuPageRoutingModule
  ],
  declarations: [SolatfardhuPage]
})
export class SolatfardhuPageModule {}
