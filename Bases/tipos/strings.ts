(() => {


// Hay 4 maneras de definir Strings en TypeScript

const Batman:string = 'Batman';
const linternaVerde:string = "Linterna Verder";
const VolcanNegro:string = `Héroe: Volcan Negro`;

console.log(`I'M ${Batman}`);
console.log(Batman.toUpperCase());

console.log(Batman[10]?.toUpperCase() || 'No esta presente')
})()