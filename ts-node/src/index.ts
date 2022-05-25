
import { Pokemon } from "./decorators/pokemon-class";

// (Pokemon.prototype as any).customName = 'Pikachu';
const charmander = new Pokemon('Charmander')


// charmander.savePokemonToDB(3)

console.log(charmander)
















// import { printObjetc,genericFunction,genericFunctionArrow } from "./generics/generics";
// import { Villain } from "./backs/genericos";
// import { getPokemon } from './generics/get-pokemon';
// getPokemon('ditto')
// .then(pokemon => console.log(pokemon.sprites.front_default))
// .catch(error => console.log(error))
// .finally(() => console.log('Fin de getPokemon'))




















































// printObjetc(123);
// printObjetc(new Date());
// printObjetc({a:1,b:2,c:3});
// printObjetc([1,2,3,4,5,6,7,8,9,10]);
// printObjetc('Hola Mundo');


// console.log(genericFunction(3.143675).toFixed(2));
// console.log(genericFunction(new Date().getDate()));
// console.log(genericFunction('Hola Mundo').toUpperCase());


// const deadpool = {
//     name: 'DeadPool',
//     realName: 'Wade Winston Wilson',
//     dangerLevel: 130,
// }

// console.log(genericFunctionArrow<Villain>(deadpool).dangerLevel)

