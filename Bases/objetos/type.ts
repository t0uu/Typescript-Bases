(() => {

    type Hero = {
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