function printToConsole(constructor: Function){
    console.log(constructor)
}

const printToConsoleConditional = (print: boolean = false):Function => {
    if(print){
        return printToConsole;
    }else{
        return () => {}
    }
}




const bloquearPrototipo = function(constructor:Function) {
Object.seal(constructor)
Object.seal(constructor.prototype)
}

// Decoradores
// Un Decorador es una simple función que se ejecuta en el momento de compilación o transpilación, es básicamente algo que permite expandir funcionalidades de una clase,un método,una propiedad.

// @printToConsole

function CheckValidatePokemonId(){
    return function(target: any, propertyKey: string, descriptor:PropertyDescriptor){
      const originalMethod = descriptor.value;
        descriptor.value = (id:number) => {
          if(id < 1 || id > 800){
              return console.error('EL ID DEBE ESTAR ENTRE 1 Y 800')
          }else{
            return originalMethod(3)
          }
      }
    }
}


function readOnly (isWritable:boolean = true):Function{
    return function (target:any, propertyKey:string){
        const descriptor:PropertyDescriptor = {
            get(){
                console.log(this)
                return 'Santiago'
            },
            set(this,val){
                // console.log(this,val)
                Object.defineProperty(this,propertyKey,{
                    value: val,
                    writable: !isWritable,
                    enumerable: false
                })
            }
        }
        return descriptor
    }
}

@bloquearPrototipo

@printToConsoleConditional(false)
export class Pokemon {
    @readOnly()
    public publicApi: string = 'https://pokeapi.co'
    constructor(
        public name:string
    ){}
    @CheckValidatePokemonId()
    savePokemonToDB(id: number){
        console.log(`Pokemon guardado en base de datos ${id}`)
    }
}