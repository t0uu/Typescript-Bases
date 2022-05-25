(() => {
    const fullName = (firstName:string, lastName:string, upper: boolean = false): string => {
    
        if(upper){
            return `${firstName} ${lastName || '------'}`.toUpperCase();

        }else{
            return `${firstName} ${lastName || '------'}`;
        }
    }
    
    // let Noname: any;
    const nombre = fullName('Tony','Stark');
    
    console.log({nombre})
    
 })();