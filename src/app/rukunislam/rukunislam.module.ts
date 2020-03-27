import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RukunislamPageRoutingModule } from './rukunislam-routing.module';

import { RukunislamPage } from './rukunislam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RukunislamPageRoutingModule
  ],
  declarations: [RukunislamPage]
})
export class RukunislamPageModule {}
