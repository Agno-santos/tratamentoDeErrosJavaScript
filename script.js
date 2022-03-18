function validaArray(arr, num){
    try{
        if(!arr && !num) throw new ReferenceError("envie os parametros");

        if( typeof arr !== 'object') throw new TypeError("O Array precisa ser do tipo object");
    
        if( typeof num !== 'number') throw new TypeError("Num precisa ser do tipo number");

        if( arr.lenght !== 'num') throw new RangeError("Tamanho inválido!!");

        return arr;
    }
    catch(e) {
        if(e instanceof ReferenceError){
            console.log("Esse erro é um ReferenceError!")
            console.log(e.message)
        }else if (e instanceof TypeError){
            console.log("Esse erro é um TypeError!")
            console.log(e.message)
        }else if (e instanceof RangeError){
            console.log("Esse erro é um RangeeError!")
            console.log(e.message)
        }else {
            console.log("Ocorreu um erro não esperado:"+e)
        }
    }
}

console.log(validaArray());
console.log(validaArray(5,5));
console.log(validaArray([],'a'));