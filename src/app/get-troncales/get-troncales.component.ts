import { Component, OnInit } from '@angular/core';
import { TroncalServiceService } from '../services/troncal-service.service';
import { HttpHeaders } from '@angular/common/http';
import { Troncal } from '../Models/troncal.model';
import { Estacion } from '../Models/estacion.model';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-get-troncales',
  templateUrl: './get-troncales.component.html',
  styleUrls: ['./get-troncales.component.css']
})
export class GetTroncalesComponent implements OnInit {
  troncales: Array<Troncal>;
  estaciones: Array<Estacion>;
  troncalRecibida: Troncal;
  constructor(private troncalService: TroncalServiceService) {
    
   }

  ngOnInit() {
    this.imprimirTroncales();
    this.troncalRecibida = new Troncal();
    //this.troncalRecibida.nombre="asd";
  }
 
  imprimirTroncales() {
    let header = new HttpHeaders({
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*.*'
    });
    this.troncalService.getAny(header).subscribe(response => {
      this.troncales = response.body;
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

  imprimirEstaciones(codTroncal: string) {
    let header = new HttpHeaders({
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*.*'
    });

    this.troncalService.getAny2(codTroncal, header).subscribe(response => {
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

  eliminarTroncal(codTroncal: string) {
    let header = new HttpHeaders({
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*.*'
    });

    this.troncalService.deleteAny(codTroncal, header).subscribe(response => {
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

  pregunta(codTroncal: string) {
    if (confirm('¿Esta seguro de eliminar la Troncal ' + codTroncal + '? Esto eliminara todas las estaciones de esta Troncal.')) {
      this.eliminarTroncal(codTroncal);
      this.reload();
      alert("La Troncal ha sido eliminada");
    }
  }

  pregunta2() {
    if (this.troncalRecibida.nombre.length>0) {
      console.log(this.troncalRecibida.nombre);
      this.actualizarTroncal(this.troncalRecibida);
    }else{
      alert("Ingrese un nombre")
    }
  }

  setTroncal(troncalRecibida: Troncal){
    this.troncalRecibida=troncalRecibida;
    console.log(this.troncalRecibida.nombre);
  }

  reload(){
    location.reload();
  }

  actualizarTroncal(troncal: Troncal) {
    this.troncalService.putAny(troncal).subscribe(response => {
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
