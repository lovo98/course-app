import { NuevoClienteComponent } from './../nuevo-cliente/nuevo-cliente.component';
import { ClientesComponent } from './../clientes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesSettingRoutingModule } from './clientes-setting-routing.module';

// ng zorro
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  declarations: [
    ClientesComponent,
    NuevoClienteComponent
  ],
  imports: [
    CommonModule,
    ClientesSettingRoutingModule,
    NzTableModule,
    NzModalModule,
    NzButtonModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule
  ],
  exports: [
    ClientesComponent,
    NuevoClienteComponent
  ]
})
export class ClientesSettingModule { }
