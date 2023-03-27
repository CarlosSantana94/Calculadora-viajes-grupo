import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TotalesPage } from './totales.page';

const routes: Routes = [
  {
    path: '',
    component: TotalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TotalesPageRoutingModule {}
