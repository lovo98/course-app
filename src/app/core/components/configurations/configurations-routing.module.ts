import { ClientesComponent } from './../clientes/clientes.component';
// modulos
import { NgModule } from '@angular/core';

// rutas
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationsRoutingModule { }
