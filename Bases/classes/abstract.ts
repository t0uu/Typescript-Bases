(()=> {

    abstract class Mutante{
        constructor(
            public nombre: string,
            public realName: string,
        ){

        }
    }

    class Xmen extends Mutante{
        salvarMundo(){
            return 'Mundo a Salvo!'
        }
    }
    class Villian extends Mutante{
        conquistarMundo(){
            return 'Mundo conquistado';
        }
    }

    // Las clases abstractas sirven para crear otras clases o para asegurar que otras clases implementen lo que nosotros esperamos, en las extend de las clases abstractas se pueden tener métodos diferentes, tambien sirve para especificar una clase o un argumento especifico 
    const wolverine = new Xmen('Wolverine','Logan');
    const magneto = new Villian('Magneto','Magnus');
    // console.log(wolverine.salvarMundo())

    // console.log(magneto.conquistarMundo())

    const printName =( character: Mutante) => {
        console.log(character.realName)
    }
    // printName(wolverine)


})();