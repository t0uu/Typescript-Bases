(()=> {

    interface Xmen{
        name:string;
        realName: string;
        mutantePower(id: number):string;
}
interface Human{
    age: number;

}
class Mutant implements Xmen, Human{
    constructor(public age: number,public name: string,public realName: string,){
        }
            mutantePower(id:number){
            return  this.name + ' ' + this.realName;
        }
            
}
const Wolverine = new Mutant(23,'Wolverine','Logan')
// console.log(Wolverine.mutantePower(10))



})()