import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RukunimanPageRoutingModule } from './rukuniman-routing.module';

import { RukunimanPage } from './rukuniman.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RukunimanPageRoutingModule
  ],
  declarations: [RukunimanPage]
})
export class RukunimanPageModule {}
