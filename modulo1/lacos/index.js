/***********************************************************************************************************************************************************************************/
/* Exercício de Interpretação de código
1.

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

    R1. O código está adicionando duas unidades até que i se repita 5 vezes com i = 0, i = 1, i = 2, i = 3 e i = 4.

2. 

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

    R2. a) Ele passar por todos os números do array e vai apresentar apenas os números que são maiores que 18 (não incluindo 18)
        b) Teria que apagar o comando if

3. 

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

    R3. *
        **
        ***
        ****
*/

//***********************************************************************************************************************************************************************************
//Exercícios de escrita

//1.

const quantidadeDePets = Number(prompt("Quantos pets você tem?"))
if (quantidadeDePets <= 0){
    console.log("Que pena! Você pode adotar um pet!")
} 
const pets = []
for (i = 0; i < quantidadeDePets; i++){
    pets.push(prompt("Digite o nome de um dos pets!"))
}

console.log (pets)
 
//***********************************************************************************************************************************************************************************

//2.a)

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for(i=0; i < array.length; i++){
    console.log(array[i])
}

//2.b)

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for(i=0; i < array.length; i++){
    arrayDividido = array[i]/10
    console.log(arrayDividido)
}
 

//2.c) 

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
for(i = 0 ; i < array.length; i++){
    if(array[i]%2 === 0){
    arrayPar = array[i]
    console.log(arrayPar)
    }
}

//2.d)
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let novaArray = []
function adicionarIndex (array){
    for (i=0; i < array.length; i++){
        novaArray.push(`O elemento do índex ${i} é ${array[i]}`)
    }
    console.log(novaArray)
}

adicionarIndex(array)



//2.e)

function buscarMaiorElemento(array){
    let maior = array[0]
    for(let i = 1; i < array.length; i++){
        if(array[i] > maior){
        maior = array[i]
        }
    }
    return maior
}

function buscarMenorElemento(array){
    let menor = array[0]
    for(let i = 1; i < array.length; i++){
        if(array[i] < menor){
            menor = array[i]
        }
    }
    return menor
}
const numeros = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

const maiorNumero = buscarMaiorElemento(numeros)
const menorNumero = buscarMenorElemento(numeros)
console.log(`O maior número é ${maiorNumero} e o menor é ${menorNumero}`)
