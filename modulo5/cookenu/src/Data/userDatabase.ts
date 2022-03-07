import { User } from "../Types/User";
import { BaseDatabase } from "./baseDatabase";

export class UserDatabase extends BaseDatabase {
    public async createUser(user: User): Promise<void> {
        try {
            await BaseDatabase.connection("User")
            .insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword()
            })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async findUserByEmail(email: string): Promise<User> {
        try {
            const user = await BaseDatabase.connection("User")
                .select('*')
                .where({ email: email })

            return user[0] && User.toUserModel(user[0])

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }


    public async getUserById(id: string): Promise<User>{
        try {
            const user = await BaseDatabase.connection("User")
            .select("id", "name", "email")
            .where({id: id})

            return user[0] && User.toUserModel(user[0])
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        } 
    }

    public async deleteUser(id: string): Promise<void> {
        try {
            const result = await BaseDatabase.connection.raw(`
                DELETE FROM User WHERE id = '${id}'
            `)

            return result[0]
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async changePassword(password: string, email: string): Promise<void> {
        try {
            const result = await BaseDatabase.connection.raw(`
                UPDATE User
                SET password = '${password}'
                WHERE email = '${email}'
            `)

            return result[0]
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}