//***********************************************************************************************************************************************************************************
//Exercícios de interpretação
/* 

1.
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

    R1. a) O código em questão verifica se o número inserido é par.
        b) Ele imprime passou no teste para um número pares
        c) Ele imprime não passou no teste para um número ímpar 
        
//***********************************************************************************************************************************************************************************

2.

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

    R2. a) O código indica o preço da fruta escolhida
        b) O preço da fruta maçã é R$ 2,25
        c) O preço da pêra seria de undefined pois teria um conflito entre os valores 5,5 e 5.

//***********************************************************************************************************************************************************************************

3.

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

    R3. a) A primeira linha está pedindo para inserir um número
        b) Se digitar o número 10 aparecerá a mensagem "Esse número passou no teste". Se digitar -10 aparecerá um erro dizendo que mensagem não foi declarada
        c) Haverá um erro pois a variável mensagem tem que estar fora do escopo da função pois existirá um conflito dentro da função. Uma sugestão é colocar uma condição else e então colocar a variavel mensagem dentro da função
        
*/
//***********************************************************************************************************************************************************************************

//Exercícios de escrita

//1.

const idadeUsuario = Number(prompt("Qual a sua idade?"))

function verificarIdade(idade){
    if (idade >= 18){
        console.log("Você pode dirigir")
    } else {
        console.log("Você não pode dirigir")
    }
}

verificarIdade(idadeUsuario)

//***********************************************************************************************************************************************************************************

//2.

const turnoQueEstuda = prompt("Digite M caso estude no turno da manhã, V no turno da tarde e N no turno da noite")

function verificarTurno(turno){
    if(turnoQueEstuda === 'M'){
        console.log('Bom dia!')
    } else if (turnoQueEstuda === 'V') {
        console.log('Boa tarde!')
    } else if (turnoQueEstuda === 'N'){
        console.log('Boa noite!')
    }else{
        console.log('Digite M, V ou N')
    }

}

verificarTurno(turnoQueEstuda)

//***********************************************************************************************************************************************************************************

//3.

const turnoQueEstuda = prompt("Digite M caso estude no turno da manhã, V no turno da tarde e N no turno da noite")

switch (turnoQueEstuda){
    case 'M': //matutino
        console.log('Bom dia!')
        break
    case 'V': //vespertino
        console.log('Boa tarde!')
        break
    case 'N': //noturno
        console.log('Boa noite!')
        break
}
 
//***********************************************************************************************************************************************************************************

//4.

const generoDoFilme = prompt("Qual gênero de filme vocês irão assistir?")
const precoDoIngresso = Number(prompt("Qual o valor que deseja pagar pelo ingresso?"))

function verificarFilmeIngresso (genero,preco){
    if(genero === 'fantasia' && preco <= 15){
        console.log("Bom Filme!")
    } else {
        console.log("Escolha outro filme")
    }
}

verificarFilmeIngresso(generoDoFilme,precoDoIngresso)

//***********************************************************************************************************************************************************************************

//Desafio 1

const generoDoFilme = prompt("Qual gênero de filme vocês irão assistir?")
const precoDoIngresso = Number(prompt("Qual o valor que deseja pagar pelo ingresso?"))

function verificarFilmeIngresso (genero,preco){
    if(genero === 'fantasia' && preco <= 15){
        console.log("Bom Filme!")
        const lancheEscolhido = prompt("Qual lanche você quer comprar?")
        console.log(`Aproveite o seu ${lancheEscolhido}`)
    } else {
        console.log("Escolha outro filme")
    }
}

verificarFilmeIngresso(generoDoFilme,precoDoIngresso)

//***********************************************************************************************************************************************************************************

//Desafio 2

const nomeCompleto = prompt("Digite seu nome completo")
const tipoDeJogo = prompt("Qual o tipo de jogo? IN (internacional) ou DO (doméstico)?")
const etapaDoJogo = prompt("Qual a etapa do jogo? SF (semi-final), DT (disputa do terceiro lugar) ou FI (final)?")
const categoria = prompt("Qual a categoria? 1, 2, 3 ou 4?")
const quantidadeDeIngressos = prompt("Qual a quantidade de ingressos desejada?")

function apresentarDados(tipo, etapa){
    if (tipo === "DO" && etapa ==="SF"){
        console.log("Tipo de Jogo: Nacional")
        console.log("Etapa do jogo: Semi-final")
        return
    } else if (tipo === "DO" && etapa ==="DT"){
        console.log("Tipo de Jogo: Nacional")
        console.log("Etapa do jogo: Disputa de terceiro")
        return
    } else if (tipo === "DO" && etapa ==="FI"){
        console.log("Tipo de Jogo: Nacional")
        console.log("Etapa do jogo: Final")
        return
    } else if (tipo === "IN" && etapa === "SF"){
        console.log("Tipo de Jogo: Internacional")
        console.log("Etapa do jogo: Semi-final")
        return 
    } else if (tipo === "IN" && etapa === "DT"){
        console.log("Tipo de Jogo: Internacional")
        console.log("Etapa do jogo: Disputa de terceiro") 
        return
    } else if (tipo === "IN" && etapa === "FI"){
        console.log("Tipo de Jogo: Internacional")
        console.log("Etapa do jogo: Final") 
        return
    }
}

console.log(`--- Dados da compra --- 
Nome Completo: ${nomeCompleto}`)
apresentarDados(tipoDeJogo, etapaDoJogo)
console.log(`Categoria do jogo: ${categoria}`)
console.log(`Quantidade de Ingressos: ${quantidadeDeIngressos}`)

/* console.log(`--- Dados da compra ---
${nomeCompleto}
${tipoDeJogo}
${etapaDoJogo}
${categoria}
${quantidadeDeIngressos}`) */

function revisarCompra (tipoDeJogo, etapaDoJogo, categoria, quantidadeDeIngressos){
    if (tipoDeJogo === 'IN'){
        switch (etapaDoJogo){
            case 'SF':
                if(categoria === '1'){
                    console.log("Valor ingresso: U$ ", 1320/4.10)
                    console.log("Valor total: U$ ", (1320 * 4.10 * quantidadeDeIngressos))
                } else if (categoria === '2'){
                    console.log("Valor ingresso: U$ ", 880,00/4.10)
                    console.log("Valor total: U$ ", (880 * 4.10 * quantidadeDeIngressos))
                } else if (categoria === '3'){
                    console.log("Valor ingresso: U$ ", 550,00/4.10)
                    console.log("Valor total: U$ ", (550 * 4.10 * quantidadeDeIngressos))
                } else if (categoria === '4'){
                    console.log("Valor ingresso: U$ ", 220,00/4.10)
                    console.log("Valor total: U$ ", (220 * 4.10 * quantidadeDeIngressos))
                }
                    break

            case 'DT':
                if(categoria === '1'){
                console.log("Valor ingresso: U$ ", 660/4.10)
                console.log("Valor total: U$ ", (660 * 4.10 * quantidadeDeIngressos))
                } else if (categoria === '2') {
                    console.log("Valor ingresso: U$", 440/4.10)
                    console.log("Valor total: U$ ", (440 * 4.10 * quantidadeDeIngressos))
                } else if (categoria === '3'){
                    console.log("Valor ingresso: U$ ", 330,00/4.10)
                    console.log("Valor total: U$ ", (330 * 4.10 * quantidadeDeIngressos))
                } else if (categoria === '4'){
                    console.log("Valor ingresso: U$ ", 170/4.10)
                    console.log("Valor total: U$ ", (170 * 4.10 * quantidadeDeIngressos))
                }
                break

            case 'FI':
                if (categoria === '1'){
                console.log("Valor ingresso: U$ ", 1980/4.10)
                console.log("Valor total: U$ ", (1980 * 4.10 * quantidadeDeIngressos))
                } else if (categoria === '2'){
                console.log("Valor ingresso: U$ ", 1320/4.10)
                console.log("Valor total: U$ ", (1320 * 4.10 * quantidadeDeIngressos))
                } else if (categoria === '3'){
                console.log("Valor ingresso: U$ ", 880/4.10)
                console.log("Valor total: U$ ", (880 * 4.10 * quantidadeDeIngressos))
                } else if (categoria === '4'){
                console.log("Valor ingresso: U$ ", 330/4.10)
                console.log("Valor total: U$ ", (330 * 4.10 * quantidadeDeIngressos))
                }
                break
        }

    }else if(tipoDeJogo === 'DO'){
        switch (etapaDoJogo){
            case 'SF': 
                if (categoria === '1'){
                    console.log("Valor ingresso: R$ 1320,00")
                    console.log("Valor total: R$ ", (1320 * quantidadeDeIngressos))
                } else if (categoria ==='2'){
                    console.log("Valor ingresso: R$ 880,00")
                    console.log("Valor total: R$ ", (880 * quantidadeDeIngressos))
                } else if (categoria === '3'){
                    console.log("Valor ingresso: R$ 550,00")
                    console.log("Valor total: R$ ", (550 * quantidadeDeIngressos))
                } else if (categoria === '4'){
                    console.log("Valor ingresso: R$ 220,00")
                    console.log("Valor total: R$ ", (220 * quantidadeDeIngressos))
                }
                break

            case 'DT': 
                if (categoria === '1'){
                console.log("Valor ingresso: R$ 660,00")
                console.log("Valor total: R$ ", (660 * quantidadeDeIngressos))
            } else if (categoria === '2'){
                console.log("Valor ingresso: R$ 440,00")
                console.log("Valor total: R$ ", (440 * quantidadeDeIngressos))
            } else if (categoria === '3'){
                console.log("Valor ingresso: R$ 330,00")
                console.log("Valor total: R$ ", (330 * quantidadeDeIngressos))
            } else if (categoria === '4'){
                console.log("Valor ingresso: R$ 170,00")
                console.log("Valor total: R$ ", (170 * quantidadeDeIngressos))
            }
                break

            case 'FI': 
                if (categoria === '1'){
                console.log("Valor ingresso: R$ 1980,00")
                console.log("Valor total: R$ ", (1980 * quantidadeDeIngressos))
            } else if (categoria === '2'){
                console.log("Valor ingresso: R$ 1320,00")
                console.log("Valor total: R$ ", (1320 * quantidadeDeIngressos))
            } else if (categoria === '3'){
                console.log("Valor ingresso: R$ 880,00")
                console.log("Valor total: R$ ", (880 * quantidadeDeIngressos))
            } else if (categoria === '4'){
                console.log("Valor ingresso: R$ 330,00")
                console.log("Valor total: R$ ", (330 * quantidadeDeIngressos))
            }
                break
    }
}
}

console.log("--- Valores ---")
revisarCompra(tipoDeJogo, etapaDoJogo, categoria, quantidadeDeIngressos)