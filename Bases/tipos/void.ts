(() => {


    function callBatman ():void{
        return;
    }
 
    const callSuperman = ():void => {
        return undefined;
    }
    const a = callBatman()

    // void significa vacio
    // void es una manera de decirle a typescript que no hay un valor de retorno, usualmente en una función que devuelve void es correcto ponerle tipo de retorno a la función 
    console.log(a) //esto retorna undefined
})()