import { OrdenesComponent } from './../ordenes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdenesSettingRoutingModule } from './ordenes-setting-routing.module';

// ng zorro
import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
  declarations: [
    OrdenesComponent
  ],
  imports: [
    CommonModule,
    OrdenesSettingRoutingModule,
    NzTableModule
  ],
  exports: [
    OrdenesComponent
  ]
})
export class OrdenesSettingModule { }
