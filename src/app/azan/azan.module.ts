import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AzanPageRoutingModule } from './azan-routing.module';

import { AzanPage } from './azan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AzanPageRoutingModule
  ],
  declarations: [AzanPage]
})
export class AzanPageModule {}
