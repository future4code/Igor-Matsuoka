import BaseDatabase from "../../src/Data/BaseDatabase"
import { User } from "../../src/Model/User"
import { userMock1, userMock2 } from "./UserMock"
import { UserRepositoryMock } from "./UserRepositoryMock"

export default class UserDataMock extends BaseDatabase implements UserRepositoryMock{
   

    insert = async (user: User):Promise<User> => {
        return user
    }

    get = async ():Promise<User[] | null> => {
       return [userMock1, userMock2]
    }

    sum = async (): Promise<number> => {
       return 80
    }

    existingUser = async (name: string, lastName:string): Promise<User[] | null> => {
        if(name === "name" && lastName === "lastName"){
            return [userMock1]
        } else if (name === "name2" && lastName === "lastName2"){
            return [userMock2]
        } 
        return null
    }

    updateParticipation = async (participation:number, name: string, lastName:string): Promise<void> => {}

}
