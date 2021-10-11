//*********************************************************************************************************************************************************************************
/*Exercício de Interpretação de código

1.

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

    R1. Matheus Nachtergaele
        Virginia Cavendish
        canal: "Globo", horario: "14h"

//*********************************************************************************************************************************************************************************

2.

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

    R2.a) nome: "Juca", 
	    idade: 3, 
	    raca: "SRD"
        nome: "Juba", 
	    idade: 3, 
	    raca: "SRD"
        nome: "Jubo", 
	    idade: 3, 
	    raca: "SRD"
       b) Os três pontos trazem as informaçõs de um objeto já declarado

//*********************************************************************************************************************************************************************************

3.

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

    R3.a) false 
          undefined
       b) Isso acontece pois backender já está declarado como falso e a altura não foi declarada no código

*/

//*********************************************************************************************************************************************************************************
//Exercícios de escrita

//1. 

const pessoa = {
    nome:"Igor",
    apelidos: ["Giro", "Igu", "Giroliro"]
}

function apelidos(objeto){
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]}, ${pessoa.apelidos[2]}`)
}

apelidos(pessoa)

//*********************************************************************************************************************************************************************************

//2. 

const pessoa1 = {
    nome:"João",
    idade: 18,
    profissao: "estudante"
}

const pessoa2 = {
    nome:"Carla",
    idade: 28,
    profissao: "advogada"
}

function pessoas(objeto1){
   const lista = [objeto1.nome, objeto1.nome.length, objeto1.idade, objeto1.profissao, objeto1.profissao.length]
   return lista
}

console.log(pessoas(pessoa1))
console.log(pessoas(pessoa2))

//*********************************************************************************************************************************************************************************

//3. 

const carrinho = []

const fruta1 = {
    nome: "maçã",
    disponibilidade: true
}

const fruta2 = {
    nome: "mamão",
    disponibilidade: true
}

const fruta3 = {
    nome: "melão",
    disponibilidade: true
}

function compras (frutas) {
    const comprasFeitas = carrinho.push()
    return comprasFeitas
}

carrinho.push(fruta1, fruta2, fruta3)
compras(carrinho)
console.log(carrinho)

//*********************************************************************************************************************************************************************************
//Desafio 1

const nomeUsuario = prompt("Qual seu nome?")
const idadeUsuario = prompt("Qual sua idade?")
const profissaoUsuario = prompt("Qual sua profissão?")

function usuario (objeto) {
    const usuario = {
        nome: nomeUsuario,
        idade: idadeUsuario,
        profissão: profissaoUsuario
    }
    return usuario
}

console.log(usuario(nomeUsuario, idadeUsuario, profissaoUsuario))

