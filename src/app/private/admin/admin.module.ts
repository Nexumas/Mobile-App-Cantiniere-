import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {AdminConfigurationPage} from "./admin-configuration/admin-configuration.page";
import {AdminWeekDishesPage} from "./admin-week-dishes/admin-week-dishes.page";
import {AdminUserAccountPage} from "./admin-user-account/admin-user-account.page";
import {AdminOrderSummaryPage} from "./admin-order-summary/admin-order-summary.page";
import {AdminCardEditPage} from "./admin-card-edit/admin-card-edit.page";


@NgModule({
  declarations: [
    AdminConfigurationPage,
    AdminWeekDishesPage,
    AdminUserAccountPage,
    AdminOrderSummaryPage,
    AdminCardEditPage
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
