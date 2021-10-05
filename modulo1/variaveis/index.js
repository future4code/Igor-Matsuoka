/***********************************************************************************************************************************************************************************/
/* Exercício de Interpretação de código

1. 

let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

    R1. Primeiramente será exibido apenas o valor de "b" que é igual a 10, depois será mostrado o valor de "a" e "b", onde "a" é igual a 10 e desta vez "b" terá o valor igual a 5.
        Aparecerá "10" e depois "10" "5" no console.

2. 

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)

    R2. Os valores de "a", "b" e "c" serão iguais a 10. Aparecerão "10 10 10" no console.

3. 

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

    R3. Primeiramente aparecerá uma janela perguntando quantas horas você trabalha por dia, e um espaço para inserir sua resposta. Depois aparecerá outra janela perguntando sobre
        o quanto você recebe por dia e um espaço para inserir sua resposta e por fim aparecerá uma outra janela dizendo o quanto você recebe por hora a partir daa fórmula {t/p} onde
        t é o quanto você recebe e p é o quanto você trabalha.

*/
/***********************************************************************************************************************************************************************************/

// Exercício de escrita
/***********************************************************************************************************************************************************************************/
// Exercício 1

let nome = prompt("Qual o seu nome?")
let idade = prompt ("Qual a sua idade?")
let idadeNumero = Number(idade)

console.log (nome, idade)
console.log (typeof nome, typeof idadeNumero)
console.log ("Olá!", "Meu nome é", nome, "e eu tenho", idade, "anos")

// Ao utilizar o typeof percebe-se que a idade, que é um number, é reconhecida como string. Tudo o que o usuário insere no prompt é uma string

/***********************************************************************************************************************************************************************************/
// Exercício 2

let almoco = prompt("Você almoçou hoje?")
let arroz = prompt ("Você comeu arroz?")
let feijao = prompt ("Você comeu feijão?")

console.log ("Você almoçou hoje?", almoco)
console.log ("Você comeu arroz?", arroz)
console.log ("Você comeu feijão?", feijao)


/***********************************************************************************************************************************************************************************/
//Exercício 3

let a = 10
let b = 25
let c = 10

a=b
b=c

console.log ("O novo valor de a é", a ,"O novo valor de b é", c) 
// Os novos valores serão a = 25 e b = 10

/***********************************************************************************************************************************************************************************/
//Desafio

let anoNascimento = prompt("Qual ano você nasceu?")
let anos = prompt ("Quantos anos você vai fazer esse ano?")
let anoNascimentoNumber = Number (anoNascimento)
let idadeNumber = Number (anos)

x = anoNascimentoNumber+idadeNumber
y = anoNascimentoNumber*idadeNumber

console.log ("Estamos no ano de", x)
console.log ("A multiplicação do seu ano pela sua idade é", y)
