import { LoginComponent } from './../login/login.component';
// modulos
import { CommonModule } from '@angular/common';
import { ConfigurationsRoutingModule } from './configurations-routing.module';
import { NgModule } from '@angular/core';
import { OrdenesSettingModule } from './../ordenes/ordenes-setting/ordenes-setting.module';
import { ProductosSettingModule } from './../productos/productos-setting/productos-setting.module';
import { ClientesSettingModule } from './../clientes/clientes-setting/clientes-setting.module';

// componentes
import { MenuComponent } from './../menu/menu.component';

// ng zorro
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NzAlertModule } from 'ng-zorro-antd/alert';

@NgModule({
  declarations: [
    MenuComponent,
    LoginComponent
  ],
  imports: [
    ConfigurationsRoutingModule,
    CommonModule,
    ClientesSettingModule,
    OrdenesSettingModule,
    ProductosSettingModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    NzAlertModule
  ],
  exports: [
    MenuComponent,
    LoginComponent
  ]
})
export class ConfigurationsModule { }
