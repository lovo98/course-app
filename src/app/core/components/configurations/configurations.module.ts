// modulos
import { CommonModule } from '@angular/common';
import { ConfigurationsRoutingModule } from './configurations-routing.module';
import { NgModule } from '@angular/core';
import { OrdenesSettingModule } from './../ordenes/ordenes-setting/ordenes-setting.module';
import { ProductosSettingModule } from './../productos/productos-setting/productos-setting.module';
import { ClientesSettingModule } from './../clientes/clientes-setting/clientes-setting.module';

// componentes
import { MenuComponent } from './../menu/menu.component';

@NgModule({
  declarations: [
    MenuComponent,
  ],
  imports: [
    ConfigurationsRoutingModule,
    CommonModule,
    ClientesSettingModule,
    OrdenesSettingModule,
    ProductosSettingModule,
  ],
  exports: [
    MenuComponent
  ]
})
export class ConfigurationsModule { }
