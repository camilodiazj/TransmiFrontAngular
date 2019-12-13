export class Ruta{
    idRuta:number = null;
    codRuta:string = null;
    nombre:string = null;
    inicioOperacion:Date = null;
    finOperacion:Date = null;

    set setCodRuta(codRuta:string){
        this.codRuta=codRuta;
    }
    get getCodEstacion():string{
        return this.codRuta;
    } 
    set setNombre(nombre:string){
        this.nombre=nombre;
    }
    get getNombre():string{
        return this.nombre;
    }
    set setInicioOperacion(inicioOperacion:Date){
        this.inicioOperacion=inicioOperacion;
    }
    get getInicioOperacion():Date{
        return this.inicioOperacion;
    }
    set setFinOperacion(finOperacion:Date){
        this.finOperacion=finOperacion;
    }
    get getFinOperacion():Date{
        return this.finOperacion;
    }
}