import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: 'personas',
        loadChildren: () => import('./personas/personas.module').then( m => m.PersonasPageModule)
      },
      {
        path: 'totales',
        loadChildren: () => import('./totales/totales.module').then( m => m.TotalesPageModule)
      },
      {
        path: 'ajustes',
        loadChildren: () => import('./ajustes/ajustes.module').then( m => m.AjustesPageModule)
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
