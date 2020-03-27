import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BulanislamPageRoutingModule } from './bulanislam-routing.module';

import { BulanislamPage } from './bulanislam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BulanislamPageRoutingModule
  ],
  declarations: [BulanislamPage]
})
export class BulanislamPageModule {}
