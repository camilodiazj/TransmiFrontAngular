import { Component, OnInit } from '@angular/core';
import { Troncal } from '../Models/troncal.model';
import { TroncalServiceService } from '../services/troncal-service.service';

@Component({
  selector: 'app-troncal',
  templateUrl: './troncal.component.html',
  styleUrls: ['./troncal.component.css']
})
export class TroncalComponent implements OnInit {
  agregado: boolean;
  constructor(private troncalService: TroncalServiceService) {
    this.agregado = false;
  }
  troncal = new Troncal;

  ngOnInit() {

  }

  send() {
    this.troncalService.postAny(this.troncal).subscribe(response => {
      if (response.status == 201) {
        console.log(this.agregado);
        this.agregado = true;
        console.log(response.status);
        alert("Troncal agregada");
        location.reload();
      } else {
        console.log("Troncal ya existente");
        this.agregado = false;
      }
    }, error => {
      console.log("La troncal ya ha sido registrada anteriormente");
    }
    );
  }

}
