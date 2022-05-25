(() => {

    class Avenger {
        constructor(
            public nombre:string,
            public realName: string,
        ) {
            // console.log('Constructor Avenger llamado')
        }
        protected getFullName(){
            return `${this.nombre} ${this.realName}`
        }
        // protected deja acceder a metodos dentro de clases que extendienda de la misma, en cambio private solo permite acceder dentro de la clase misma.
        
    }

    class Xmen extends Avenger {
        constructor(
            nombre: string,
            realName: string,
            public isMutant:boolean
            ){
                super(nombre,realName)
                // console.log('Constructor Xmen llamado')
            

                
            }
            // get debe regresar un valor o no funcionara, get recibe un valor y establece algo.
            get fullName(){
                return `${this.nombre} - ${this.realName}`
            }
            set fullName(nombre:string){
                if(nombre.length < 3){
                    throw new Error('El nombre debe ser mayor de 3 letras')
                }else{
                    this.nombre = nombre;
                }
            }
            getFullNameDesdeXmen(){
            console.log(super.getFullName())    
            }
    }

    const wolverine = new Xmen('Wolverine','Logan',true)
    // console.log(wolverine.fullName)

    // wolverine.fullName = 'Sa';

    // console.log(wolverine.fullName)


    // wolverine.getFullNameDesdeXmen()
    const nuevoAvenger = new Avenger('Hola', 'Mundo')
})()