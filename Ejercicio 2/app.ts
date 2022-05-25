// Funciones Básicas
function sumar( a:number, b:number ):number{
  return a + b;
}
console.log(sumar(2,4))

const contar = ( heroes:string[] ) => {
  return heroes.length;
}
const superHeroes:string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
console.log(contar(superHeroes))
//Parametros por defecto
const llamarBatman = ( llamar:boolean = true ) => {
  if( llamar ){
    console.log("Batiseñal activada");
  }
}

llamarBatman();

// Rest?
const unirheroes = ( personas: string, ...Args: string[] ):string => {
  return `${personas} ${Args.join(",")}`;
}

unirheroes('JOHN','MARC','PHILIP')


// Tipo funcion
const noHaceNada = ( numero:number, texto:string, booleano:boolean, arreglo:string[] )=> {}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco:Function = (s:number,txt:string,bool:boolean,arr:string[]) => {};
noHaceNadaTampoco = noHaceNada
console.log(noHaceNadaTampoco)

function saludar(mensaje:string = "mundo"){
 
  console.log("Hola " + mensaje);
 
}
 
saludar();