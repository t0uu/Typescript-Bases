(() => {
const fullName = (firstName:string,lastName:string):string => {

    return `${firstName}, ${lastName}`
}

let Noname: any;
const nombre = fullName('Tony','Stark');

console.log({nombre})

});