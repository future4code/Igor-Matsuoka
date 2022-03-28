import { UserBusiness } from "../src/business/UserBusiness"
import { CustomError } from "../src/errors/CustomError"
import { HashGeneratorMock } from "./mocks/hashGeneratorMock"
import { idGeneratorMock } from "./mocks/idGeneratorMock"
import { TokenGeneratorMock } from "./mocks/tokenGeneratorMock"
import { UserDatabaseMock } from "./mocks/userDatabaseMock"

const userBusinessMock = new UserBusiness(
    new idGeneratorMock(),
    new HashGeneratorMock(),
    new TokenGeneratorMock(),
    new UserDatabaseMock() as any
)

describe("getUserById", () => {
   test("Should catch error when id is not registered", async () => {
    expect.assertions(2)
    try {
      await userBusinessMock.getUserById("abc")
    } catch (error) {
        if(error instanceof CustomError){
            console.log(error.message)
            expect(error.statusCode).toBe(404)
            expect(error.message).toBe("User not found")
        }
    }
  })

  test("Should return respective user when id is registered", async () => {
    expect.assertions(0)
    
    try {
      const getUserById = jest.fn(
        (id: string) => userBusinessMock.getUserById(id)
      )
        
      const result = await getUserById("id_mock_admin")

      expect(getUserById).toHaveBeenCalledWith("id_mock_admin")
      expect(result).toEqual({
        id: "id_mock_admin",
        name: "astrodev",
        email: "astrodev@gmail.com",
        role: "ADMIN",
      })
      
    } catch (error) {
        if(error instanceof CustomError){
            console.log(error.message)
        }
    }
  })
})