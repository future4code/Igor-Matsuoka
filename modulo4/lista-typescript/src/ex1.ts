//Crie um função que receba uma string com o nome e outra string com uma data de nascimento (ex.: “24/04/1993”). 
//A função deve separar o dia, o mês e ano e retornar uma string no seguinte formato: 
//"Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}"

function apresentaPessoa (nome:string, data:string):string{
    const dataSeparada:string[] = data.split("/")
    return `Olá me chamo ${nome}, nasci no dia ${dataSeparada[0]} do mês de ${dataSeparada[1]} do ano de ${dataSeparada[2]}`
}

console.log(apresentaPessoa("Igor", "22/04/1996"))
