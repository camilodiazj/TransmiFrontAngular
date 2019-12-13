import { Component, OnInit } from '@angular/core';
import { RutaServiceService } from '../services/ruta-service.service';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Ruta } from '../Models/ruta.model';
import { Estacion } from '../Models/estacion.model';

@Component({
  selector: 'app-get-rutas',
  templateUrl: './get-rutas.component.html',
  styleUrls: ['./get-rutas.component.css']
})
export class GetRutasComponent implements OnInit {
  rutaRecibida: Ruta;
  rutas: Array<Ruta>;
  estaciones: Array<Estacion>;
  constructor(private rutaService: RutaServiceService) { }

  ngOnInit() {
    this.imprimirRutas();
    this.rutaRecibida = new Ruta();
  }

  imprimirRutas() {
    let header = new HttpHeaders({
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*.*'
    });

    this.rutaService.getAny(header).subscribe(response => {
      this.rutas = response.body;
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

  imprimirEstaciones(codRuta: string) {
    let header = new HttpHeaders({
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*.*'
    });

    this.rutaService.getAny2(codRuta, header).subscribe(response => {
      this.estaciones = response.body;
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

  eliminarRuta(codRuta: string) {
    let header = new HttpHeaders({
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*.*'
    });

    this.rutaService.deleteAny(codRuta, header).subscribe(response => {
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

  pregunta(codRuta: string) {
    if (confirm('¿Esta seguro de eliminar la Ruta ' + codRuta + '?')) {
      this.eliminarRuta(codRuta);
      location.reload();
      alert("La Ruta ha sido eliminada");
    }
  }

  pregunta2() {
    if (this.rutaRecibida.nombre.length>0) {
      console.log(this.rutaRecibida.nombre);
      this.actualizarRuta(this.rutaRecibida);
    }else{
      alert("Ingrese un nombre")
    }
  }

  setRuta(rutaRecibida: Ruta){
    this.rutaRecibida=rutaRecibida;
    console.log(this.rutaRecibida.nombre);
  }

  reload() {
    location.reload();
  }

  actualizarRuta(ruta: Ruta) {
    this.rutaService.putAny(ruta).subscribe(response => {
      if (response.status == 201) {
        console.log(response.status);
        alert("Troncal actualizada");
        this.reload();
      } else {
        console.log("La troncal no se pudo actualizar");
      }
    }, error => {
      console.log("No se pudo agregar");
    }
    );
  }

}
