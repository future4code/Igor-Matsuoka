import UserBusiness from "../src/Business/UserBusiness";
import UserDataMock from "./mocks/UserDataMock";

const userBusinessMock = new UserBusiness(
    new UserDataMock()
)

describe('teste ao cadastrar passeio', () =>{

  test("erro ao passar algum input vazio", async () => {
    const input = ({
      name: "name",
      lastName: "",
      participation: 20
    })

    try {
      await userBusinessMock.insertUser(input)

    } catch (error: any) {
      console.log(error.message)
      expect(error.message).toEqual("Insira todos os campos!")
    }
  })

  test("erro ao passar participação negativa", async () => {
    const input = ({
      name: "name",
      lastName: "lastName",
      participation: -200
    })

    try {
      await userBusinessMock.insertUser(input)

    } catch (error: any) {
      console.log(error.message)
      expect(error.message).toEqual("Não é possível uma participação negativa!")
    }
  })

  test("erro ao passar participação maior que 100", async () => {
    const input = ({
      name: "name",
      lastName: "lastName",
      participation: 200
    })

    try {
      await userBusinessMock.insertUser(input)
      
    } catch (error: any) {
      console.log(error.message)
      expect(error.message).toEqual("Não é possível uma participação acima da porcentagem máxima!")
    }
  })

  test("Situação correte", async () => {
    const input = ({
      name: "name",
      lastName: "lastName",
      participation: 20
    })

    try {
      await userBusinessMock.insertUser(input)
      
    } catch (error: any) {
      console.log(error.message)
    }
  })


})