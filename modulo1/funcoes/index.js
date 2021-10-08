//***********************************************************************************************************************************************************************************
//Exercícios de Interpretação de código

/*
1.

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

    R1. a) Será impresso o valor 10 e o valor 50
        b) Não apareceria nada no console, mas a função iria ser realizada

//***********************************************************************************************************************************************************************************


2.

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

    R2. a) Essa função tem como função pegar o texto inserido no prompt, transformar todas as letras em minuscula e identificar a palavra cenoura, retornando true ou false.
        b) I. true
           II. true
           III. true 


*/
//***********************************************************************************************************************************************************************************
//Exercícios de escrita de código

//1.a)

function biografia() {
    console.log ("Eu sou Igor, tenho 25 anos, moro em Londrina e sou estudante")
}

biografia()

//1.b)

function biografia(nome, idade, endereco, profissao){
    console.log ([`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}`])
}

let nome = prompt("Qual seu nome?")
let idade = prompt("Qual sua idade?")
let endereco = prompt("Qual sua cidade?")
let profissao = prompt("Qual sua profissao?")

let frase = biografia(nome, idade, endereco, profissao)
console.log(frase)

//***********************************************************************************************************************************************************************************

//2.a)

function teste(parametro1, parametro2) {
    const soma = parametro1 + parametro2
    return soma
}

const soma = teste(44,5)
console.log(soma)

//2.b)

function verificar(numero1, numero2){
    const verificacao = (numero1 >= numero2)
    return verificacao
}

const numeros = verificar (5,5)
console.log(numeros)

//2.c)

function verificarPar(numero3){
    const restoDivisao = numero3%2 ===0
    return restoDivisao
}

const numeroVerificado = verificarPar(5)
console.log(numeroVerificado)

//2.d)

let textoInserido = prompt("Escreva uma frase")

function novaFuncao(texto) {
    return texto.toUpperCase()
}
const textoFinal = novaFuncao(textoInserido)
console.log(textoFinal)
console.log(textoFinal.length)

//***********************************************************************************************************************************************************************************

//3.

function somar(n1, n2){
    const soma = n1+n2
    return soma
}

function subtrair(n1, n2){
    const subtracao = n1-n2
    return subtracao
}

function multiplicar(n1, n2){
    const multiplicacao = n1*n2
    return multiplicacao
}

function dividir(n1, n2){
    const divisao = n1/n2
    return divisao
}

const somatorio = somar(30,3)
const subtraido = subtrair(30,3)
const multiplicado = multiplicar(30,3)
const dividido = dividir(30,3)

console.log(`Soma: ${somatorio} 
Diferença: ${subtraido} 
Multiplicação: ${multiplicado} 
Divisão: ${dividido}`)

//***********************************************************************************************************************************************************************************

//Desafio 1


const primeiraArrowFunction = (texto) => {
    console.log(texto)
    return texto
}

const textoTeste = primeiraArrowFunction("OLA")

const segundaArrowFunction = (numB, numC) => {
    const soma = numB + numC
    console.log(soma)
}

segundaArrowFunction(4,5)


//***********************************************************************************************************************************************************************************
//Desafio 2

function pitagoras (a, b){
    const c = Math.pow(Math.pow(a, 2) + Math.pow(b,2), 0.5)
    return c
}

const hipotenusa = pitagoras(6,9)
console.log(hipotenusa)