// a) Responda como comentário no seu código: como fazemos para acessar os parâmetros passados na linha de comando para o Node?
//R:Podemos utilizar o process.argv

// b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:

// const blue = '\u001b[34m';
// const nome = process.argv[2]
// const idade = Number(process.argv[3])

// console.log(typeof idade)
// console.log(`${blue} Olá, ${nome}! Você tem ${idade} anos.`)

//c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.

const red = '\u001b[31m';
const nome = process.argv[2]
const idade = Number(process.argv[3])
const novaIdade = 7 + idade

console.log(` ${red} Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}`)