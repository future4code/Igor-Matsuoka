import { BaseDatabase } from "./baseDatabase";
import { USER_ROLES } from "../types/userRoles";

export class UserDatabase extends BaseDatabase{
    public async createUser(
        id: string,
        email: string,
        name: string,
        password: string,
        role: USER_ROLES
      ): Promise<void> {
        try {
          await UserDatabase.connection("User_Arq")
            .insert({
                id,
                email,
                name,
                password,
                role
            })
        } catch (error:any) {
          throw new Error(error.sqlMessage || error.message);
        }
    }

    public async getUserByEmail(email: string): Promise<any> {
        try {
    
          const result = await UserDatabase.connection("User_Arq")
            .select("*")
            .where({ email });
                if(!result[0]){
                    throw new Error("Usuário não encontrado");
                }
          return result[0];
        } catch (error: any) {
          throw new Error(error.sqlMessage || error.message);
        }
      }
}   