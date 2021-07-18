import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "home",
    loadChildren: () => import("./core/components/home/home-setting/home-setting.module").then(m => m.HomeSettingModule)
  },
  {
    path: "clientes",
    loadChildren: () => import("./core/components/clientes/clientes-setting/clientes-setting.module").then(m => m.ClientesSettingModule)
  },
  {
    path: "productos",
    loadChildren: () => import("./core/components/productos/productos-setting/productos-setting.module").then(m => m.ProductosSettingModule)
  },
  {
    path: "ordenes",
    loadChildren: () => import("./core/components/ordenes/ordenes-setting/ordenes-setting.module").then(m => m.OrdenesSettingModule)
  },
  {
    path: "**",
    redirectTo: "home", pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
