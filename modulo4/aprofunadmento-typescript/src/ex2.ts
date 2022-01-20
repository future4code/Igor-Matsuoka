//Ex.2
//a) As entradas são dois número sendo eles representados por a e b. As saídas são as estatisticas {maior, menor, media}
//b) Tem-se também as variáveis soma e numeros

function obterEstatisticas(numeros:number[]) {

    const numerosOrdenados:any = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

type AmostraDeDados = {numeros: number[], obterEstatisticas: (numeros:number[]) => {
    maior: number,
    menor: number,
    media: number
}}

const amostraDeIdades: AmostraDeDados = {
    numeros: [21, 18, 65, 44, 15, 18],  

    obterEstatisticas: obterEstatisticas
}

console.log(amostraDeIdades.obterEstatisticas(amostraDeIdades.numeros))