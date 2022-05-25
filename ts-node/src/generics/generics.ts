export const printObjetc = (argument:any) => {
    console.log(argument)
}

export function genericFunction<T>(argument: T):T{
    return argument;
}

export const genericFunctionArrow = <T>(argument: T):T => argument

//los genéricos es algo que me va a permitir a mi trabajar con cualquier tipo de dato, y aprovechar las ventajas que tiene TypeScript para que me ayude con la autocompletación y posibles errores que yo pueda cometer a la hora de escribir o a la hora de manejar la data. 
