import { environment } from './../environments/environment.prod';
import { AuthService } from './services/auth.service';
// modulos
import { ConfigurationsModule } from './core/components/configurations/configurations.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData, CommonModule } from '@angular/common';
import es from '@angular/common/locales/es';
registerLocaleData(es);
import { NZ_I18N, es_ES } from 'ng-zorro-antd/i18n';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// componentes
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ConfigurationsModule
  ],
  providers: [
    AuthService,
    { provide: 'apiUrl', useValue: environment.apiUrl },
    { provide: NZ_I18N, useValue: es_ES }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
