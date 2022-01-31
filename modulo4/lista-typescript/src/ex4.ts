//O seguinte array traz as pessoas colaboradoras de uma empresa, com seus salários, setores e se trabalham presencialmente ou por home office:
type Colaboradores = {nome:string, salário:number, setor:SETOR, presencial:boolean}
enum SETOR {
    FINANCEIRO = "financeiro",
    MARKETING = "marketing",
    VENDAS = "vendas"
}

const colaboradores:Colaboradores[] = [
	{ nome: "Marcos", salário: 2500, setor: SETOR.MARKETING, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: SETOR.VENDAS, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "João" ,salário: 2800, setor: SETOR.MARKETING, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: SETOR.VENDAS, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: SETOR.MARKETING, presencial: true }
]

function procuraSetor(colaboradores:Colaboradores[]):Colaboradores[]{
    return colaboradores.filter((colaborador)=>{
      return colaborador.setor === SETOR.MARKETING && colaborador.presencial === true
    })
}

console.log(procuraSetor(colaboradores))