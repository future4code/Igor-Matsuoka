import { UserRepository } from "../../Business/UserRepository";
import { User } from "../../Model/User";
import BaseDatabase from "../BaseDatabase";

export default class UserData extends BaseDatabase implements UserRepository{
    protected TABLE_NAME = "Cubo"

    insert = async (user: User) => {
        try {
            await BaseDatabase
            .connection(this.TABLE_NAME)
            .insert(user)
            
            return user
        } catch (error:any) {
            throw new Error("Erro ao criar usuário no banco de dados!")
        }
    }

}