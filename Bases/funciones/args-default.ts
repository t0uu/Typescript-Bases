(() => {
    const fullName = (firstName:string,lastName?:string, upper:boolean =false): string => {
        if(upper){

            return `${firstName} ${lastName || 'No LastName'}`.toUpperCase();
        }else{
            return `${firstName} ${lastName || 'No LastName'}`;
        }
    }
    
    // let Noname: any;
    const nombre = fullName('Tony','Stark',true);
    
    console.log({nombre})
    
 })();