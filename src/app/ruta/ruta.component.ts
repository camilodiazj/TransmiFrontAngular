import { Component, OnInit } from '@angular/core';
import { Ruta } from '../Models/ruta.model';
import { RutaServiceService } from '../services/ruta-service.service';

@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.component.html',
  styleUrls: ['./ruta.component.css']
})
export class RutaComponent implements OnInit {
  codigoRuta: string;
  nombre: string;
  inicioOperacion: Date;
  finOperacion: Date;
  agregado: boolean;
  constructor(private rutaService: RutaServiceService) { }
  ruta = new Ruta;

  ngOnInit() {

  }

  send() {
    this.rutaService.postAny(this.ruta).subscribe(response => {
      if (response.status == 201) {
        console.log(this.ruta);
        console.log(response.status);

      } else {
        console.log("Ruta ya existente");
        this.agregado = false;
      }
    }, error => {
      console.log(this.agregado = false);
    }
    );
  }

}

