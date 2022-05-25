(() => {

    interface Client {
        nombre:string;
        age?: number;
        address:Address;
        getFullAddress(id: string):void;
    }
    // las interfaces no crean instancias,ya que en este caso el cliente es una interfaz.
    interface Address{
        id:number;
        zip: string;
        city: string;
    }
    
    const client:Client = {
        nombre: 'Santiago',
        age: 21,
        address: {
            id: 125,
            zip: 'AR 2942',
            city: 'Buenos Aires',
        },
        getFullAddress(id:String){
            return this.address.city;
        }
    };

    const client2: Client ={
        nombre: 'Melissa',
        age:30,
        address: {
            id: 125,
            zip: 'AR 2942',
            city: 'Buenos Aires',
        },
        getFullAddress(id:String){
            return this.address.city;
        }
    }


})()