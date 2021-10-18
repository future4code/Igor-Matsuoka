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
    array.sort((a,b) => a-b)
    if (array.length === 2){
        return [array[0], array[1]]
    }
    array.pop()
    array.shift()
    return [array[array.length-1], array[0]]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    const objeto = {
        ...filme
    }
    return `Venha assistir ao filme ${filme.nome}, de 2006, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    let objeto = {
        ...pessoa
    }
    let pessoaAnonima = {
        ...objeto, 
        nome: "ANÔNIMO"
    }
    return pessoaAnonima
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const array = [...pessoas]
    let pessoasPermitidas = array.filter((item) => {
        return item.altura > 1.5 && 60 > item.idade && 14 < item.idade
    })
    return pessoasPermitidas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const array = [...pessoas]
    let pessoasNaoPermitidas = array.filter((item) => {
        return item.altura < 1.5 || 60 < item.idade || 14 >= item.idade
    })
    return pessoasNaoPermitidas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    const array = [...contas]
    let adicionarSaldo = array.map((item) => {
        let somaCompras = 
    })
    return adicionarSaldo
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    const array = [...consultas]
    let ordenarNomes = array.map((item)=>{
        return item.nome.toUpperCase()
    })
    return ordenarNomes.sort()
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}