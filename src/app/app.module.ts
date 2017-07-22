import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { LogComponent } from './componentes/log/log.component';
import { SoporteComponent } from './componentes/soporte/soporte.component';
import { PorPlacaComponent } from './componentes/log/por-placa.component';
import { PorTagComponent } from './componentes/log/por-tag.component';
import { PorOperacionComponent } from './componentes/log/por-operacion.component';
import { CerrarOperacionComponent } from './componentes/soporte/cerrar-operacion.component';
import { LiberarTagComponent } from './componentes/soporte/liberar-tag.component';
import { CrearOperacionTagComponent } from './componentes/soporte/crear-operacion-tag.component';
import { CrearTagComponent } from './componentes/soporte/crear-tag.component';
import { HabilitarTagComponent } from './componentes/soporte/habilitar-tag.component';

import {APP_ROUTING} from './app.routes';
import {SoporteService} from './services/soporte.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    LogComponent,
    SoporteComponent,
    PorPlacaComponent,
    PorTagComponent,
    PorOperacionComponent,
    CerrarOperacionComponent,
    LiberarTagComponent,
    CrearOperacionTagComponent,
    CrearTagComponent,
    HabilitarTagComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    APP_ROUTING
  ],
  providers: [SoporteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
