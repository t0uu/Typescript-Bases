(() => {

    // El Never significa que una función no debe terminar exitosamente,
    const error = (message: string):never => {
        throw new Error(message)
    }

    error('Auxilio!');
    console.log('Hola Mundo')
})()