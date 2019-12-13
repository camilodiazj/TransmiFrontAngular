import { Component, OnInit } from '@angular/core';
import { EstacionServiceService } from '../services/estacion-service.service';
import { HttpHeaders } from '@angular/common/http';
import { Estacion } from '../Models/estacion.model';
import { environment } from 'src/environments/environment';
import { Ruta } from '../Models/ruta.model';
import { Troncal } from '../Models/troncal.model';
import { TroncalServiceService } from '../services/troncal-service.service';

@Component({
  selector: 'app-get-estaciones',
  templateUrl: './get-estaciones.component.html',
  styleUrls: ['./get-estaciones.component.css']
})
export class GetEstacionesComponent implements OnInit {
  estaciones: Array<Estacion>;
  rutas: Array<Ruta>;
  environment: any;
  estacionRecibida: Estacion;
  troncales: Array<Troncal>
  constructor(private estacionService: EstacionServiceService, private troncalService: TroncalServiceService) {
    this.environment = environment;
  }

  ngOnInit() {
    this.imprimirEstaciones();
    this.imprimirTroncales();
    this.estacionRecibida = new Estacion();
    // this.imprimirRutas();
  }

  imprimirEstaciones() {
    let header = new HttpHeaders({
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*.*'
    });

    this.estacionService.getAny(header).subscribe(response => {
      this.estaciones = response.body;
      console.log("getEstacion");
      console.log(response.status);
      if (response.status == 200) {
        console.log(response);
      } else {
        console.log("Fallo");
      }
    }, error => {
      error.error.message;
    });

  }

  imprimirRutas(codEstacion: string) {
    let header = new HttpHeaders({
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*.*'
    });

    this.estacionService.getAny2(codEstacion, header).subscribe(response => {
      this.rutas = response.body;
      console.log("getRuta");
      console.log(response.status);
      if (response.status == 200) {
        console.log(response);
      } else {
        console.log("Fallo");
      }
    }, error => {
      error.error.message;
    });

  }

  eliminarEstacion(codEstacion: string) {
    let header = new HttpHeaders({
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*.*'
    });

    this.estacionService.deleteAny(codEstacion, header).subscribe(response => {
      console.log("getRuta");
      console.log(response.status);
      if (response.status == 200) {
        console.log(response);
      } else {
        console.log("Fallo");
      }
    }, error => {
      error.error.message;
    });

  }

  pregunta(codEstacion: string) {
    if (confirm('¿Esta seguro de eliminar la estación ' + codEstacion + '? Esto eliminara todas las estaciones de esta Troncal.')) {
      this.eliminarEstacion(codEstacion);
      location.reload();
      alert("La Estación ha sido eliminada!");
    }
  }

  pregunta2() {
    if (this.estacionRecibida.nombre.length>0) {
      console.log(this.estacionRecibida);
      this.actualizarEstacion(this.estacionRecibida);
    }else{
      alert("Ingrese un nombre")
    }
  }

  setEstacion(estacionRecibida: Estacion){
    this.estacionRecibida=estacionRecibida;
  }

  reload(){
    location.reload();
  }

  actualizarEstacion(estacion: Estacion ) {
    console.log(this.estacionRecibida);
    let header = new HttpHeaders({
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*.*'
    });
    this.estacionService.putAny(estacion).subscribe(response => {
      if (response.status == 201) {
        console.log(response.status);
        alert("Estacion actualizada");
        location.reload();
      } else {
        console.log("No se pudo actualizar la estación");
      } {
        console.log("---");
      }
    }, error => {
      console.log("Estación ya existente");
    });
  }

  imprimirTroncales() {
    let header = new HttpHeaders({
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*.*'
    });
    this.troncalService.getAny(header).subscribe(response => {
      this.troncales = response.body;
      console.log(this.troncales);
      console.log(response.status);
      if (response.status == 200) {
        console.log(response);
      } else {
        console.log("Falló");
      }
    }, error => {
      error.error.message;
    });

  }
}
