import {powers} from "../data/power";
export class Hero{
    constructor(
        public name: string,
        public powerId: number,
        public age: number,
    ){}
    get power ():String{
        return powers.find(power => power.id === this.powerId)?.desc || 'not found';
        // Signo de admiración "!" significa que Typescript confie en mi código
        // Signo de pregunta para checkear 
    
}
}
