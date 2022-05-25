(() => {


    // Las interfaces y los tipos hacen lo mismo, la diferencia es que los tipos no son expandibles pero una interfaces se puede extender y añadir más cosas

    interface Hero {
        nombre: string,
        age?: number,
        powers: number[],
        getNombre?: () => string;
    }

    let flash:Hero = {
        nombre: 'Barry Alen',
        age: 24,
        powers: [1, 2],
    }

    let superman:Hero ={
        nombre: 'Clark Kent',
        age: 60,
        powers: [1],
        getNombre(){
            return this.nombre;
        }
    }


})()