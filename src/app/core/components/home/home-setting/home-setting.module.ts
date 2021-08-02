import { ConfigurationsModule } from './../../configurations/configurations.module';
import { HomeComponent } from './../home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeSettingRoutingModule } from './home-setting-routing.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeSettingRoutingModule,
    ConfigurationsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeSettingModule { }
