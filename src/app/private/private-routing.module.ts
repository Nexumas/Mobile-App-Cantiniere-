import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserAccountPage} from './user/user-account/user-account.page';

const routes: Routes = [
  {
    path: 'account',
    component: UserAccountPage
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
