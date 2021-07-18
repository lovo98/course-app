import { ProductosComponent } from './../productos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosSettingRoutingModule } from './productos-setting-routing.module';

// ng zorro
import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
  declarations: [
    ProductosComponent
  ],
  imports: [
    CommonModule,
    ProductosSettingRoutingModule,
    NzTableModule
  ],
  exports: [
    ProductosComponent
  ]
})
export class ProductosSettingModule { }
