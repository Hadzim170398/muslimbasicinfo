import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhalifahPageRoutingModule } from './khalifah-routing.module';

import { KhalifahPage } from './khalifah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KhalifahPageRoutingModule
  ],
  declarations: [KhalifahPage]
})
export class KhalifahPageModule {}
