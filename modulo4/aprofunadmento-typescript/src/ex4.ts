//Ex.4
type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//b) no package.json existe o script: "start": "tsc && node index.js", então iria usar o npm start no console
//c) O processo seria diferente pois teria que criar uma pasta build e mudar o caminho para "start": "tsc && node ./build/index.js"
//d) Eu utilizaria apenas o comando "tsc" no console, desta maneira ele compilaria todos os arquivos.ts da pasta src