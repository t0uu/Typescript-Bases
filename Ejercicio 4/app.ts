// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)
interface conducirAuto {
  encender: boolean;
  velocidadMaxima: number;
  acelerar: () => void;
}

const auto:conducirAuto = {
  encender:true,
  velocidadMaxima: 100,
  acelerar(){
   return console.log('Acelera')
  } 
}
const batimovil:conducirAuto = {
  encender:false,
  velocidadMaxima:0,
  acelerar(){
    console.log("...... gogogo!!!");
  }
}
batimovil.acelerar()
// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface guason  {
  reir?: boolean,
  comer?:boolean,
  llorar?:boolean,
  risa: () => void;
}

const Guason:guason = {
  reir: true,
  comer: true,
  llorar: false,
  risa(){
    if( Guason.reir){
      console.log("JAJAJAJA");
    }
  }
}


Guason.risa()




// Cree una interfaz para la siguiente funcion
interface Ciudad{
 (ciudadanos:string[]):number;
}
let ciudadGotica:Ciudad;
ciudadGotica = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

console.log(
  ciudadGotica(['Batman','Pinguino','GENIAL PAPÁ'])
  )

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos
interface Propiedades{
  nombre:string;
  edad:number;
  sexo:string;
  estadoCivil:string;
  imprimirBio: () => void;
}
/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements Propiedades {
 constructor(public nombre:string
             ,public edad:number
             ,public sexo:string
             ,public estadoCivil:string){

 }
 imprimirBio =():void => {
   console.log('HOLA')
 }
}

const Santiago = new Persona('Santiago',21,'Hombre','Soltero')
Santiago.imprimirBio()


