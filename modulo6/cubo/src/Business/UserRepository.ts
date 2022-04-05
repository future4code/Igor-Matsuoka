import { User } from "../Model/User"

export interface UserRepository{
    insert(user: User):Promise<User>
}