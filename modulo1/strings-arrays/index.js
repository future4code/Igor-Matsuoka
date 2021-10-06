/***********************************************************************************************************************************************************************************/
/* Exercício de Interpretação de código
1.

let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)

    R1. a. Indefinido
        b. nulo
        c. 11
        d. 3
        e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        f. 9

2.

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

    R2. O valor impresso será "SUBI NUM ÔNIBUS EM MIRROCOS"

*/

/***********************************************************************************************************************************************************************************/

// Exercício de Interpretação de código
//Exercício 1

let nomeDoUsuario = prompt("Digite seu nome")
let emailDoUsuario = prompt("Digite seu e-mail")
let bemVindo = "O e-mail " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem-vindo(o), " + nomeDoUsuario + "!"
console.log (bemVindo)

/***********************************************************************************************************************************************************************************/

//Exercício 2
const comidasPreferidas = ["Sukiyaki", "Pizza", "Hambúrguer", "Sushi", "Churrasco"]
console.log(comidasPreferidas)

console.log (`Essas são minhas comidas preferidas:   
${comidasPreferidas[0]} 
${comidasPreferidas[1]}
${comidasPreferidas[2]} 
${comidasPreferidas[3]}  
${comidasPreferidas[4]}`)

let suaComidaPreferida = prompt("Qual a sua comida preferida?")

let variaveltrocada = comidasPreferidas.splice(1,1, suaComidaPreferida)
console.log (comidasPreferidas)

/***********************************************************************************************************************************************************************************/

//Exercício 3

let listaDeTarefas = []
let tarefa1 = prompt("Qual a primeira tarefa do dia?")
let tarefa2 = prompt("Qual a segunda tarefa do dia?")
let tarefa3 = prompt("Qual a terceira tarefa do dia?")

listaDeTarefas.push (tarefa1, tarefa2, tarefa3)
console.log(listaDeTarefas)

let tarefaRealizada = prompt("Qual tarefa você já realizou? Digite o índice: 0, 1 ou 2")

let tarefaConcluida = listaDeTarefas.splice(tarefaRealizada, 1)
console.log(listaDeTarefas)

/***********************************************************************************************************************************************************************************/

//Desafio 1

let frase = prompt("Digite uma frase:")
let arrayFrase = frase.split(" ")

console.log (arrayFrase)

/***********************************************************************************************************************************************************************************/

//Desafio 2
const array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log (array)
const indiceAbacaxi = array[2]  
console.log(array.indexOf("Abacaxi") + ", número de itens na lista " + array.length)
