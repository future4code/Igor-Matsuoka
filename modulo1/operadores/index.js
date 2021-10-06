/***********************************************************************************************************************************************************************************/
/* Exercício de Interpretação de código
1. 

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)

    R1. a. False 
        b. False
        c. True
        d. Boolean
/***********************************************************************************************************************************************************************************
2.    
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

    R2. O que irá aparecer é "primeiroNumerosegundoNumero" ou seja, se o primeiro numero for 1 e o segundo for 2, aparecerá 12

/***********************************************************************************************************************************************************************************
3.
    R3. Para corrigir este problema, ele pode transformar as variaveis que serão fornecidas como strings em numbers. Exemplo abaixo:

        let primeiroNumero = prompt("Digite um numero!")
        let segundoNumero = prompt("Digite outro numero!")
        primeiroNumero = Number(primeiroNumero)
        segundoNumero = Number(segundoNumero)

        const soma = primeiroNumero + segundoNumero

        console.log(soma)

*/
/***********************************************************************************************************************************************************************************/


// Exercício de escrita
/***********************************************************************************************************************************************************************************/
// Exercício 1

let idadeUsuario = prompt("Qual a sua idade?")
let idadeAmigo = prompt("Qual a idade do(a) seu/sua melhor amigo(a)?")
idadeUsuario = Number(idadeUsuario)
idadeAmigo = Number(idadeAmigo)

let maior = idadeUsuario > idadeAmigo
let menor = idadeUsuario <= idadeAmigo
let diferenca = idadeUsuario - idadeAmigo

console.log ("Sua idade é maior do que a do(a) seu/sua melhor amigo(a)?", maior > menor)
console.log ("A difereça de idade é igual a:", diferenca)

/***********************************************************************************************************************************************************************************/

// Exercício 2

let numeroPar = prompt("Insira um número par")
numeroPar = Number(numeroPar)

let restoDivisao = numeroPar%2
console.log ("O resta dessa divisão é igual a", restoDivisao)

    // O resultado obtido será sempre 0, pois um número par dividido por 2 não apresenta resto.
    // Se o usuário inserir um número impar irá apresentar o resto da divisão que sempre será 1, pois um número ímpar dividido por 2, o resto sempre será 1

/***********************************************************************************************************************************************************************************/

// Exercício 3

let idadeAnos = prompt("Qual a sua idade?")
idadeAnos = Number(idadeAnos)

let idadeMeses = idadeAnos*12
let idadeDias = idadeAnos*365
let idadeHoras = idadeDias*24

console.log ("Sua idade em meses é igual a", idadeMeses)
console.log ("Sua idade em dias é igual a", idadeDias)
console.log ("Sua idade em horas é igual a", idadeHoras)

/***********************************************************************************************************************************************************************************/

// Exercício 4

let numero1 = prompt("Digite um número") 
let numero2 = prompt("Digite outro número")
numero1 = Number(numero1)
numero2 = Number(numero2)

let maior = numero1 > numero2
let igual = numero1 === numero2
let naoDivisivel1 = numero1%numero2 ===0
let naoDivisivel2 = numero2%numero1 ===0

console.log ("O primeiro numero é maior que segundo?", maior)
console.log ("O primeiro numero é igual ao segundo?", igual)
console.log ("O primeiro numero é divisível pelo segundo?", naoDivisivel1)
console.log ("O segundo numero é divisível pelo primeiro?", naoDivisivel2)

/***********************************************************************************************************************************************************************************/