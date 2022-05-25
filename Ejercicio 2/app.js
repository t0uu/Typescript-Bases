"use strict";
// Funciones Básicas
function sumar(a, b) {
    return a + b;
}
console.log(sumar(2, 4));
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
console.log(contar(superHeroes));
//Parametros por defecto
const llamarBatman = (llamar = true) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
// Rest?
const unirheroes = (personas, ...Args) => {
    return `${personas} ${Args.join(",")}`;
};
unirheroes('JOHN', 'MARC', 'PHILIP');
// Tipo funcion
const noHaceNada = (numero, texto, booleano, arreglo) => { };
// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco = (s, txt, bool, arr) => { };
noHaceNadaTampoco = noHaceNada;
console.log(noHaceNadaTampoco);
function saludar(mensaje = "mundo") {
    console.log("Hola " + mensaje);
}
saludar();
