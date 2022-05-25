"use strict";
// Crear interfaces
const auto = {
    encender: true,
    velocidadMaxima: 100,
    acelerar() {
        return console.log('Acelera');
    }
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelerar() {
        console.log("...... gogogo!!!");
    }
};
batimovil.acelerar();
const Guason = {
    reir: true,
    comer: true,
    llorar: false,
    risa() {
        if (Guason.reir) {
            console.log("JAJAJAJA");
        }
    }
};
Guason.risa();
let ciudadGotica;
ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
console.log(ciudadGotica(['Batman', 'Pinguino', 'GENIAL PAPÁ']));
/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona {
    constructor(nombre, edad, sexo, estadoCivil) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.estadoCivil = estadoCivil;
        this.imprimirBio = () => {
            console.log('HOLA');
        };
    }
}
const Santiago = new Persona('Santiago', 21, 'Hombre', 'Soltero');
Santiago.imprimirBio();
//# sourceMappingURL=main.js.map