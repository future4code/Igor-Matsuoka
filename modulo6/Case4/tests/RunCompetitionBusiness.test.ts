import RunCompetitionBusiness from "../src/Business/DartCompetition/DartCompetitionBusiness"
import { SITUACAO } from "../src/Model/Competition"
import RunCompetitionDataMock from "./mocks/RunCompetitionMocks/RunCompetitionDataMock"

const runCompetitionBusinessMock = new RunCompetitionBusiness(
    new RunCompetitionDataMock()
)

describe('teste ao cadastrar atleta e competição', () =>{

  test("erro ao passar algum input vazio", async () => {
    const input = ({
        id: "id1",
        competicao: "Competicao1",
        atleta: "atleta1",
        valor: "",
        unidade: "unidade1",
        situacao: SITUACAO.FINALIZADO
    })

    try {
      await runCompetitionBusinessMock

    } catch (error: any) {
      console.log(error.message)
      expect(error.message).toEqual("Insira todos os campos!")
    }
  })

  test("erro ao passar unidade diferente de s", async () => {

    const input = ({
        id: "id1",
        competicao: "Competicao1",
        atleta: "atleta1",
        valor: "valor1",
        unidade: "k",
        situacao: SITUACAO.FINALIZADO
    })
    
    try {
      await runCompetitionBusinessMock.insertDart(input)

    } catch (error: any) {
      console.log(error.message)
      expect(error.message).toEqual("Unidade Inválida!")
    }
  })

}) 