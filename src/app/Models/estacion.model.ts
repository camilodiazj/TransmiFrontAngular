import { EstacionComponent } from '../estacion/estacion.component';

export class Estacion{

     codEstacion:string = null;
     nombre:string = null;
     estado:string = null;
     codTroncal:string = null;
     horaApertura:Date = null;
     horaCierre:Date = null;

    public set setCodEstacion(codEstacion:string){
        this.codEstacion=codEstacion;
    }
    public get getCodEstacion(): string{
        return this.codEstacion;
    } 
    public set setNombre(nombre:string){
        this.nombre=nombre;
    }
    public get getNombre():string{
        return this.nombre;
    }
    public set setEstado(estado:string){
        this.estado=estado;
    }
    public get getEstado():string{
        return this.estado;
    }
    public set setCodTroncal(codTroncal:string){
        this.codTroncal=codTroncal;
    }
    public get getCodTroncal():string{
        return this.codTroncal;
    }
    public set setHoraApertura(horaApertura:Date){
        this.horaApertura=horaApertura;
    }
    public get getHoraApertura():Date{
        return this.horaApertura;
    }
    public set setHoraCierre(horaCierre:Date){
        this.horaCierre=horaCierre;
    }
    public get getHoraCierre():Date{
        return this.horaCierre;
    }
}