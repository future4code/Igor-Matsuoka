// Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. 
// O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.

const blue = '\u001b[34m';
const red = '\u001b[31m';
const purple = '\u001b[35m';
const orange = '\u001b[37m';
const operacao = process.argv[2]
const numero1 = Number(process.argv[3])
const numero2 = Number(process.argv[4])

switch (operacao) {
    case "add":
        console.log(`${red} Resposta: ${numero1 + numero2}`)
        break;
    case "sub":
        console.log(`${blue}Resposta: ${numero1 - numero2}`)
        break;
    case "mult":
        console.log(`${purple}Resposta: ${numero1 * numero2}`)
        break;
    case "div":
        console.log(`${orange}Resposta: ${numero1 / numero2}`)
        break;
}

