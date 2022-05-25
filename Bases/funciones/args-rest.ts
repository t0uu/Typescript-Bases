(() => {
    const fullName = (firstName: string, ...restArgs: string[]) => {
        return `${firstName} ${restArgs.join(' ')}`
    }



    const superman = fullName('Clark','Joseph');



    console.log({superman})
})();