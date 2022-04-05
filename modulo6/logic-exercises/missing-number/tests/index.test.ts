import { missingNumber } from "../src"

const completeArrayMock = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
]

const completeArrayMock2 = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
]

//Está faltando o 9 na array a seguir
const numberArrayMock = [
    1, 2, 3, 4, 5, 6, 7, 8, 10,
]

const numberArrayMock2 = [
    1, 2, 3, 4, 5, 6, 7, 8, 10, 11
]

describe('teste ao inciar corrida', () =>{

    test("erro ao passar array completa como segundo parâmetro", async () => {
      const input = completeArrayMock2
      const input2 = numberArrayMock2
  
      try {
        const result = missingNumber(input, input2)
        expect(result).toBeLessThan(0)
  
      } catch (error) {
        console.log(error)
      }
    })
  
    test("Sem erros", async () => {
        const input = completeArrayMock
        const input2 = numberArrayMock
  
      try {
        missingNumber(input, input2)
  
      } catch (error) {
        console.log(error)
      }
    })
})