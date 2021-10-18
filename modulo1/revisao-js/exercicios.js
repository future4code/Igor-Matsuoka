// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a,b) => a-b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    return array.filter((a) => a%2 === 0)
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let pares = array.filter((item) => item%2 === 0)
    let paresElevados = pares.map((item)=> {
        return Math.pow(item, 2)
    })
    return paresElevados
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    return Math.max.apply(Math, array)
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    if(num1 > num2){
        maiorNumero = num1
        menorNumero = num2
    } else {
        maiorNumero = num2
        menorNumero = num1
    }
    let maiorDivisivelPorMenor = maiorNumero%menorNumero === 0
    let diferenca = maiorNumero - menorNumero
    return {maiorNumero, maiorDivisivelPorMenor, diferenca}
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = []
    for (let i = 0; numerosPares.length < n; i += 2) {
        numerosPares.push(i)
    }
    return numerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoA === ladoC && ladoB === ladoC) {
        return "Equilátero"
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        return "Isósceles"
    } else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}