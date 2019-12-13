import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { TroncalComponent } from './troncal/troncal.component';
import { RutaComponent } from './ruta/ruta.component';
import { EstacionComponent } from './estacion/estacion.component';
import { GetEstacionesComponent } from './get-estaciones/get-estaciones.component';
import { GetRutasComponent } from './get-rutas/get-rutas.component';
import { GetTroncalesComponent } from './get-troncales/get-troncales.component';


const routes: Routes = [{path: '', component: TestComponent},{path: 'troncales', component: TroncalComponent},
{path: 'rutas', component: RutaComponent},{path: 'estaciones', component: EstacionComponent},
{path: 'estaciones/lista', component: GetEstacionesComponent},{path: 'rutas/lista', component: GetRutasComponent},
{path: 'troncales/lista', component: GetTroncalesComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
