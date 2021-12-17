import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import {UserModule} from './user/user.module';
import {AdminModule} from "./admin/admin.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    UserModule,
    AdminModule
  ]
})
export class PrivateModule { }
