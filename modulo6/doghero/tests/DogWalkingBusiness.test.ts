import DogWalkingBusiness from "../src/Business/DogWalkingBusiness"
import { CustomError } from "../src/Error/CustomError"
import { DURACAO } from "../src/Model/Walk"
import DogWalkingDataMock from "./mocks/DogWalkingDataMock"

const dogWalkingBusinessMock = new DogWalkingBusiness(
  new DogWalkingDataMock()
)

describe('teste ao cadastrar passeio', () =>{

  test("erro ao passar algum input vazio", async () => {
    const input = ({
      data_de_agendamento: "22/04/1996",  
      duracao: DURACAO.MEIAHORA,
      latitude: 30.12313131,
      longitude: 23.313123131,
      pets:2,
      horario_inicio: "",
      horario_termino: "18:30:00"
    })

    try {
      await dogWalkingBusinessMock.create(input)

    } catch (error) {
      if (error instanceof CustomError) {
        console.log(error.message)
        expect(error.message).toEqual("Preencha todos os dados corretamente")
      }
    }
  })

  test("erro ao passar horário inválido", async () => {
    const input = ({
      data_de_agendamento: "22/04/1996",  
      duracao: DURACAO.HORA,
      latitude: 30.12313131,
      longitude: 23.313123131,
      pets:2,
      horario_inicio: "18:00",
      horario_termino: "18:30:00"
    })

    try {
      await dogWalkingBusinessMock.create(input)

    } catch (error) {
      if (error instanceof CustomError) {
        console.log(error.message)
        expect(error.message).toEqual("Preencha o horário corretamente")
      }
    }
  })

  test("erro ao passar horários iguais", async () => {
    const input = ({
      data_de_agendamento: "22/04/1996",  
      duracao: DURACAO.HORA,
      latitude: 30.12313131,
      longitude: 23.313123131,
      pets:2,
      horario_inicio: "18:00:00",
      horario_termino: "18:00:00"
    })

    try {
      await dogWalkingBusinessMock.create(input)

    } catch (error) {
      if (error instanceof CustomError) {
        console.log(error.message)
        expect(error.message).toEqual("O horário de inicio é igual ao de termino")
      }
    }
  })

  test("erro ao passar horário inicial maior que final", async () => {
    const input = ({
      data_de_agendamento: "22/04/1996",  
      duracao: DURACAO.HORA,
      latitude: 30.12313131,
      longitude: 23.313123131,
      pets:2,
      horario_inicio: "18:30:00",
      horario_termino: "18:00:00"
    })

    try {
      await dogWalkingBusinessMock.create(input)

    } catch (error) {
      if (error instanceof CustomError) {
        console.log(error.message)
        expect(error.message).toEqual("O horário de inicio é maior que o de termino")
      }
    }
  })

})


describe('teste ao inciar corrida', () =>{

  test("erro ao passar algum input vazio", async () => {
    const input = ({
      id: "id_mockado",
      horario_inicio: ""
    })

    try {
      await dogWalkingBusinessMock.startWalk(input)

    } catch (error) {
      if (error instanceof CustomError) {
        console.log(error.message)
        expect(error.message).toEqual("Preencha todos os dados corretamente")
      }
    }
  })

  test("erro ao passar horário inválido", async () => {
    const input = ({
      id: "id_mockado",
      horario_inicio: "18:00"
    })

    try {
      await dogWalkingBusinessMock.startWalk(input)

    } catch (error) {
      if (error instanceof CustomError) {
        console.log(error.message)
        expect(error.message).toEqual("Preencha o horário corretamente")
      }
    }
  })
})

describe('teste ao terminar corrida', () =>{

  test("erro ao passar algum input vazio", async () => {
    const input = ({
      id: "id_mockado",
      horario_termino: ""
    })

    try {
      await dogWalkingBusinessMock.finishWalk(input)

    } catch (error) {
      if (error instanceof CustomError) {
        console.log(error.message)
        expect(error.message).toEqual("Preencha todos os dados corretamente")
      }
    }
  })

  test("erro ao passar horário inválido", async () => {
    const input = ({
      id: "id_mockado",
      horario_termino: "18:00"
    })

    try {
      await dogWalkingBusinessMock.finishWalk(input)

    } catch (error) {
      if (error instanceof CustomError) {
        console.log(error.message)
        expect(error.message).toEqual("Preencha o horário corretamente")
      }
    }
  })

})

describe('teste ao mostra corrida', () =>{

  test("erro ao passar algum input vazio", async () => {
    const input = ""

    try {
      await dogWalkingBusinessMock.show(input)

    } catch (error) {
      if (error instanceof CustomError) {
        console.log(error.message)
        expect(error.message).toEqual("Preencha todos os dados corretamente")
      }
    }
  })

  test("erro ao passar algum input vazio", async () => {
    const input = ""

    try {
      await dogWalkingBusinessMock.show(input)

    } catch (error) {
      if (error instanceof CustomError) {
        console.log(error.message)
        expect(error.message).toEqual("Preencha todos os dados corretamente")
      }
    }
  })

})

describe('teste ao mostrar corridas', () =>{

  test("erro ao passar page = 0", async () => {
    const pageInput = 0
    const walksPerPageInput = 3

    try {
      await dogWalkingBusinessMock.index(pageInput, walksPerPageInput)

    } catch (error) {
      if (error instanceof CustomError) {
        console.log(error.message)
        expect(error.message).toEqual("Page não pode ser igual a 0")
      }
    }
  })

  test("erro ao passar algum input vazio", async () => {
    const pageInput = ""
    const walksPerPageInput = 3

    try {
      await dogWalkingBusinessMock.index(pageInput, walksPerPageInput)

    } catch (error) {
      if (error instanceof CustomError) {
        console.log(error.message)
        expect(error.message).toEqual("Preencha todos os dados corretamente")
      }
    }
  })

})