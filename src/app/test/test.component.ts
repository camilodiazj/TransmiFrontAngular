import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Persona } from '../prueba/persona.model';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  environment: any;
  constructor() { 
    this.environment = environment;
}

ngOnInit() {
}

send(){

}

}