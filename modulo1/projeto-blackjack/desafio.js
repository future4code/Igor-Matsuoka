//Dando Boas-vindas ao usuário
if(confirm("Boas-vindas ao jogo de black-jack! Quer iniciar uma nova rodada?")){
//se Usuário aceitar
   for (i=0; i<2; i++) {
   const cartaUsuario1 = comprarCarta()
   const cartaUsuario2= comprarCarta()
}

   const cartaUsuario1 = comprarCarta()
   const cartaUsuario2= comprarCarta()     
   const somaValoresUsuario = cartaUsuario1.valor + cartaUsuario2.valor

   for (i=0; i<2; i++) {
      const cartaComputador1 = comprarCarta()
      const cartaComputador2 = comprarCarta()
   }
      const cartaComputador1 = comprarCarta()
      const cartaComputador2 = comprarCarta()
      const somaValoresComputador = cartaComputador1.valor + cartaComputador2.valor

   if(confirm("Suas cartas são" + cartaUsuario1, cartaUsuario2 + ". A carta do computador é " + cartaComputador1 + "." + "\n" + "Deseja comprar outra carta?")){

   } else if (21 > somaValoresComputador > somaValoresUsuario) {
      alert("O Computador venceu!")
   } else if (21 > somaValoresComputador < somaValoresUsuario) {
      alert("O Usuário venceu!")
   } else if (somaValoresComputador === somaValoresUsuario) {
      alert("O jogo empatou!")
   } else if (somaValoresComputador = 21 && somaValoresUsuario !== 21) {
      alert("O Computador venceu!")
   } else if (somaValoresUsuario = 21 && somaValoresComputador !== 21) {
      alert("O Usuário venceu!")
   } else if (somaValoresComputador > 21 && somaValoresUsuario < 21){
      alert("O Usuário venceu!")
   } else if (somaValoresUsuario > 21 && somaValoresComputador < 21){
      alert("O Computador venceu!")
   }

//se Usuário recusar
} else {
   console.log("O jogo acabou!")
}





/* //Esolha para jogar
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
} */
