import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TotalesPageRoutingModule } from './totales-routing.module';

import { TotalesPage } from './totales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TotalesPageRoutingModule
  ],
  declarations: [TotalesPage]
})
export class TotalesPageModule {}
