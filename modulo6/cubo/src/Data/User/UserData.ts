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

    get = async ():Promise<User[] | null> => {
        try {
            const result = await BaseDatabase
            .connection(this.TABLE_NAME)
            .select()
           
            return result
        } catch (error:any) {
            throw new Error("Erro ao buscar usuários no banco de dados!")
        }
    }

    sum = async (): Promise<number> => {
        try {
            const result = await BaseDatabase
            .connection.raw(`
                SELECT SUM(participation) as total FROM ${this.TABLE_NAME};
            `)
            
            return result[0][0].total
        } catch (error:any) {
            throw new Error("Erro ao pegar soma no banco de dados!")
        }
    }

    existingUser = async (name: string, lastName:string): Promise<User[]> => {
        try {
            const result = await BaseDatabase
            .connection.raw(`
                SELECT * FROM ${this.TABLE_NAME} WHERE name='${name}' AND lastName='${lastName}';
            `)
           
            return result[0]
        } catch (error:any) {
            throw new Error("Erro ao verificar participação de usuário existente!")
        }
    }

    updateParticipation = async (participation:number, name: string, lastName:string): Promise<void> => {
        try {
           await BaseDatabase
            .connection.raw(`
                UPDATE ${this.TABLE_NAME} SET participation = participation + '${participation}' WHERE name='${name}' AND lastName='${lastName}';
            `)
           
        } catch (error:any) {
            throw new Error("Erro ao atualizar participação!")
        }
    }

}
