import { ClientesComponent } from './../clientes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesSettingRoutingModule } from './clientes-setting-routing.module';

// ng zorro
import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
  declarations: [
    ClientesComponent
  ],
  imports: [
    CommonModule,
    ClientesSettingRoutingModule,
    NzTableModule
  ],
  exports: [
    ClientesComponent
  ]
})
export class ClientesSettingModule { }
