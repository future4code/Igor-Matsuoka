import { User } from "../Model/User"

export interface UserRepository{
    insert(user: User):Promise<User>
    get():Promise<User[] | null>
    sum():Promise<number>
    existingUser(id:string): Promise<User>
    updateParticipation(participation:number, name: string, lastName:string): Promise<void>
}