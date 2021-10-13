// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01

function calculaAreaRetangulo(altura, largura) {
  altura = prompt("Digite um valor para altura")
  largura = prompt("Digite um valor para altura")
  console.log (altura * largura)
}

// EXERCÍCIO 02 

function imprimeIdade() {
  anoAtual = prompt("Digite o ano atual")
  anoDeNascimento = prompt("Digite o ano de nascimento")
  console.log (anoAtual - anoDeNascimento)
}

// EXERCÍCIO 03

function calculaIMC(peso, altura) {
  imc = peso / (altura*altura)
  console.log (peso/(altura*altura))
  return imc
} 

// EXERCÍCIO 04

function imprimeInformacoesUsuario(nome, idade, email) {
   nome = prompt("Seu nome")
   idade = prompt("Sua idade")
   email = prompt("Seu email")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}


// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  primeiraCor = prompt("Sua cor favorita?")
  segundaCor = prompt("Sua segunda cor favorita?")
  terceiraCor = prompt("Sua terceira cor favorita?")
  listaDeCor = []
  listaDeCor.push(primeiraCor, segundaCor, terceiraCor)
  console.log(listaDeCor)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  ingressosNecessarios = custo/valorIngresso
  return ingressosNecessarios
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  verifica = string1.length === string2.length
  return verifica
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
 lista = []
 return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  lista = []
  return array[array.length-1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const IndiceUltimoElemento = array.length-1
  const primeiroElemento = array[0]
  const ultimoElemento = array[IndiceUltimoElemento]

  array[0] = ultimoElemento
  array[IndiceUltimoElemento] = primeiroElemento
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  string1 = string1.toLowerCase()
  string2 = string2.toLowerCase()
  verifica = string1 === string2
  return verifica
}

// EXERCÍCIO 13
function checaRenovacaoRG(anoAtual, anoNascimento, anoCarteira) {
  anoAtual = prompt("Qual o ano atual?")
  anoNascimento = prompt("Qual o ano de nascimento?")
  anoCarteira = prompt("Qual o ano de emissão da carteira de identidade?")
  const idade = anoAtual - anoNascimento
  const idadeCarteira = anoAtual - anoCarteira
  verificacao1 = idade <= 20 && idadeCarteira >= 5
  verificacao2 = 50 >= idade >=20 && idadeCarteira >=10
  verificacao3 = idade > 50 && idadeCarteira > 15
  console.log(resultado)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}