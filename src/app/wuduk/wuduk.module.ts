import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WudukPageRoutingModule } from './wuduk-routing.module';

import { WudukPage } from './wuduk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WudukPageRoutingModule
  ],
  declarations: [WudukPage]
})
export class WudukPageModule {}
