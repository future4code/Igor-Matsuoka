//Ex.1
//a)
// const minhaString:string = 3
// console.log(minhaString)

//b)
// const meuNumero:number = 3
// console.log(meuNumero)

type pessoa = {nome:string, idade:number, corFavorita:corArcoIris}

enum corArcoIris {
    VERMELHO = "vermelho", 
    LARANJA = "laranja", 
    AMARELA = "amarelo", 
    VERDE = "verde", 
    AZUL = "azul", 
    AZULESCURO = "azul-Escuro",
    VIOLETA = "violeta"
}

const person1: pessoa = {
    nome: "Igor",
    idade: 25,
    corFavorita: corArcoIris.VERMELHO
}

const person2: pessoa = {
    nome: "Julia",
    idade: 23,
    corFavorita: corArcoIris.AZUL
}

const person3: pessoa = {
    nome: "Pietro",
    idade: 32,
    corFavorita: corArcoIris.VIOLETA
}

const person4: pessoa = {
    nome: "Andréia",
    idade: 22,
    corFavorita: corArcoIris.LARANJA
}

console.log(person1, person2, person3, person4)

//a) O comando encontra um erro dizendo que um type number não pode ser colocado em uma variavel string
//b) O console retorna a váriavel declarada sem nenhum problema