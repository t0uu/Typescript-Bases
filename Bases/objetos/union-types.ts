(()=> {

    type Hero = {
        nombre: string,
        age?: number,
        powers: number[],
        getNombre?: () => string;
    }

    let myCustomVariable: string | number | Hero = 'Santiago';
    console.log(typeof myCustomVariable);

    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        nombre:'Bruce',
        age: 43,
        powers: [1]
    }
    console.log(typeof myCustomVariable)

})()