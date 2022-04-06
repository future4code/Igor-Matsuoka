import { User } from "../../src/Model/User"


export interface UserRepositoryMock {
    insert(user: User):Promise<User>
    get():Promise<User[] | null>
    sum():Promise<number>
    existingUser(name: string, lastName:string): Promise<User[] | null>
    updateParticipation(participation:number, name: string, lastName:string): Promise<void>
}