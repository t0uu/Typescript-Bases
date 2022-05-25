(() => {

    let avenger:any = 123;
    let exists;
    let power;

    avenger = 'Dr Strange';
    // console.log(avenger.charAt(0));
    // Esto es un Casteo:
    console.log((avenger as string).charAt(0));

    avenger = 150.234564;
    console.log((<number>avenger).toFixed(2));
    
})()
// El valor Any no es recomendable utilizar para eso utilizar JavaScript. La idea de TypeScript es utilizar un tipado Estricto.