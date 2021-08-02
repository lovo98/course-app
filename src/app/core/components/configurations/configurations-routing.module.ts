import { LoginComponent } from './../login/login.component';
import { ClientesComponent } from './../clientes/clientes.component';
// modulos
import { NgModule } from '@angular/core';

// rutas
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "home",
    loadChildren: () => import("../home/home-setting/home-setting.module").then(m => m.HomeSettingModule)
  },
  {
    path: "clientes",
    loadChildren: () => import("../clientes/clientes-setting/clientes-setting.module").then(m => m.ClientesSettingModule)
  },
  {
    path: "productos",
    loadChildren: () => import("../productos/productos-setting/productos-setting.module").then(m => m.ProductosSettingModule)
  },
  {
    path: "ordenes",
    loadChildren: () => import("../ordenes/ordenes-setting/ordenes-setting.module").then(m => m.OrdenesSettingModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationsRoutingModule { }
