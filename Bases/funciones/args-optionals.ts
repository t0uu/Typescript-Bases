(() => {
    const fullName = (firstName:string,lastName?:string): string => {
    
        return `${firstName} ${lastName || 'No LastName'}`;
    }
    
    // let Noname: any;
    const nombre = fullName('Tony');
    
    console.log({nombre})
    
 })();