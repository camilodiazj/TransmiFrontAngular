import { Component, OnInit } from '@angular/core';
import { Estacion } from '../Models/estacion.model';
import { Troncal } from '../Models/troncal.model';
import { EstacionServiceService } from '../services/estacion-service.service';
import { TroncalServiceService } from '../services/troncal-service.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-estacion',
  templateUrl: './estacion.component.html',
  styleUrls: ['./estacion.component.css']
})
export class EstacionComponent implements OnInit {
  constructor(private estacionService:EstacionServiceService, private TroncalService:TroncalServiceService) { }
  estacion = new Estacion;
  troncales:Array<Troncal>;
  ngOnInit() {
    this.imprimirTroncales();
  }
  
  send(){
    console.log(this.estacion);
    let header = new HttpHeaders({
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*.*'
    });
    this.estacionService.postAny(this.estacion).subscribe(response =>{
      if (response.status == 201){
        console.log(response.status);
        alert("Estacion agregada");
        location.reload();
      } else {
        console.log("Estación ya existente");
      } {
      console.log("---");
    }
    }, error => {
      console.log("Estación ya existente");
      }); 
  }
  
  imprimirTroncales(){
    let header = new HttpHeaders({
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*.*'
      });
    this.TroncalService.getAny(header).subscribe(response =>{
      this.troncales = response.body;
      console.log(response.status);
      if (response.status == 200){
        console.log(response);
      } else {
      console.log("Falló");
      }
      }, error => {
      error.error.message;
      });

    }

}
