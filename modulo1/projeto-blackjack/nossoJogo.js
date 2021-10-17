//Dando Boas-vindas ao usuário
console.log("Boas-vindas ao jogo de black-jack!")

//Esolha para jogar
if(confirm("Quer iniciar uma nova rodada?")) {
   //se Usuario clicar em ok
   //Usuário compra carta
   for (i=0; i<2; i++) {
      const cartaUsuario1 = comprarCarta()
      const cartaUsuario2= comprarCarta()
   }
   
      const cartaUsuario1 = comprarCarta()
      const cartaUsuario2= comprarCarta()     
      const somaValoresUsuario = cartaUsuario1.valor + cartaUsuario2.valor

      console.log("Usuário - cartas: ", cartaUsuario1.texto, "," , cartaUsuario2.texto, "- Pontuação:", somaValoresUsuario)

   //Computador compra carta
   for (i=0; i<2; i++) {
      const cartaComputador1 = comprarCarta()
      const cartaComputador2 = comprarCarta()
   }
      const cartaComputador1 = comprarCarta()
      const cartaComputador2 = comprarCarta()
      const somaValoresComputador = cartaComputador1.valor + cartaComputador2.valor

      console.log("Computador - cartas: ", cartaComputador1.texto, ",", cartaComputador2.texto, "- Pontuação:", somaValoresComputador)
   
   // Determinando o vencedor 
   if(somaValoresComputador > somaValoresUsuario) {
      console.log("O computador ganhou!")
   } else if (somaValoresComputador < somaValoresUsuario){
      console.log("O usuário ganhou!")
   } else if (somaValoresComputador === somaValoresUsuario) {
      console.log("Os participantes empataram!")
   }

// se o Usuário clicar em cancelar
} else {
   console.log("O jogo acabou!")
}