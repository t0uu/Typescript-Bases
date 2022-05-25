(() => {

    class Avenger {

        static avgAge: number = 55;
        static getAvgAge() {
            return this.name
        }
        constructor(private nombre:string,
            private team: string, 
            public realName?: string, 
            ){
                // this.nombre = nombre;
            // this.team = team;
            // this.realName = realName;
            // this.avgAge = avgAge;
        }
      public bio() {
            return `${this.nombre} ${this.team}`
        }
    }



    const antman: Avenger = new Avenger('Antman','Avenger','Scott Lang');
    
    
    // console.log(antman)
    
    // console.log(Avenger.avgAge)

    // console.log(antman.bio())
    // console.log(Avenger.getAvgAge())
})()