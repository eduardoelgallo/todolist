import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'open',
        children: [
          {
            path: '',
            loadChildren: () => import('./pages/open/open.module').then((m) => m.OpenPageModule),
          },
        ],
      },
      {
        path: 'assigned',
        loadChildren: () => import('./pages/assigned/assigned.module').then( m => m.AssignedPageModule)
      },
      {
        path: 'inprogress',
        loadChildren: () => import('./pages/inprogress/inprogress.module').then( m => m.InprogressPageModule)
      },
      {
        path: 'complete',
        loadChildren: () => import('./pages/complete/complete.module').then( m => m.CompletePageModule)
      },
      {
        path: '',
        redirectTo: 'tabs/open',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'tabs/open',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
