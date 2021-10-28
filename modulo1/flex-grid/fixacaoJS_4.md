``` javascript

function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let arrayNumerosIguais = arrayDeNumeros.filter((item) => {
    return (item === numeroEscolhido)
  })
  let numeroDeVezes = arrayNumerosIguais.length
  if (numeroDeVezes > 0) {
    return `O número ${numeroEscolhido} aparece ${numeroDeVezes}x`
  } else if (numeroDeVezes <= 0) {
    return `Número não encontrado`
  }
}

```