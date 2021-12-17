import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminModule} from "../private/admin/admin.module";
import { PrivateModule } from '../private/private.module';
import { PublicModule } from '../public/public.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AdminModule,
    PrivateModule,
    PublicModule
  ]
})
export class SharedModule { }
