
function fatorial(valor:string):number{
    const numeroLetras = valor.length
    let contador = 1;
        for(let i = numeroLetras; i > 1; i--){
            contador *= i;
        }
    return contador;
}
  
console.log(fatorial("mensal"))