(() => {

    let flash:{nombre:string,age?:number,powers:string[], getNombre?: () => string} = {
        nombre: 'Barry Alen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el tiempo'],
    }

    let superman:{nombre:string,age?:number,powers:string[], getNombre?: () => string} = {
        nombre: 'Clark Kent',
        age: 60,
        powers: ['Super Velocidad'],
    }

    console.log(flash)
})() 