import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserAccountPage} from "../user/user-account/user-account.page";
import {AdminCardEditPage} from "./admin-card-edit/admin-card-edit.page";
import {AdminConfigurationPage} from "./admin-configuration/admin-configuration.page";
import { AdminOrderSummaryPage } from './admin-order-summary/admin-order-summary.page';
import {AdminUserAccountPage} from "./admin-user-account/admin-user-account.page";
import {AdminWeekDishesPage} from "./admin-week-dishes/admin-week-dishes.page";

const routes: Routes = [
  {
    path: 'card-edit',
    component: AdminCardEditPage
  },
  {
    path: 'configuration',
    component: AdminConfigurationPage
  },
  {
    path: 'admin-order-summary',
    component: AdminOrderSummaryPage
  },
  {
    path: 'admin-user-account',
    component: AdminUserAccountPage
  },
  {
    path: 'admin-week-dishes',
    component: AdminWeekDishesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
