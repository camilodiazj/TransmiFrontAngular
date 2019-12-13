import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { RutaComponent } from './ruta/ruta.component';
import { EstacionComponent } from './estacion/estacion.component';
import { TroncalComponent } from './troncal/troncal.component';
import { HttpClientModule } from '@angular/common/http';
import { GetEstacionesComponent } from './get-estaciones/get-estaciones.component';
import { GetTroncalesComponent } from './get-troncales/get-troncales.component';
import { GetRutasComponent } from './get-rutas/get-rutas.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    RutaComponent,
    EstacionComponent,
    TroncalComponent,
    GetEstacionesComponent,
    GetTroncalesComponent,
    GetRutasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
