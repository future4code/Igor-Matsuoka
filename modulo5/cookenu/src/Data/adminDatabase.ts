import { Admin } from "../Types/Admin";
import { BaseDatabase } from "./baseDatabase";

export class AdminDatabase extends BaseDatabase {
    public async createAdmin(admin: Admin): Promise<void> {
        try {
            await BaseDatabase.connection("User")
            .insert({
                id: admin.getId(),
                name: admin.getName(),
                email: admin.getEmail(),
                password: admin.getPassword(),
                role: admin.getRole()
            })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async findUserByEmail(email: string): Promise<Admin> {
        try {
            const result = await BaseDatabase.connection("User")
                .select('*')
                .where({ email: email })

            return result[0] && Admin.toUserModel(result[0])

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }


    public async getUserById(id: string): Promise<Admin>{
        try {
            const result = await BaseDatabase.connection("User")
            .select("id", "name", "email")
            .where({id: id})

            return result[0] && Admin.toUserModel(result[0])
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
        
    }
}