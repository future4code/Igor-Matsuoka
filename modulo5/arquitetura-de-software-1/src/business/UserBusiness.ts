import { UserDatabase } from '../data/userDatabase';
import { Authenticator } from '../services/authenticator';
import { HashManager } from '../services/hashManager';
import { generateId } from '../services/idGenerator';
import { USER_ROLES } from '../types/userRoles';

const authenticator = new Authenticator()
const userDatabase = new UserDatabase()
const hashManager = new HashManager()

export class UserBusiness {
    async createUser(user: { email: string; name: string; password: string; role: USER_ROLES; id?: any; }) {
        try {
    
            if (!user.name || !user.email || !user.password || !user.role) {
                throw new Error("Please fill all the fields");
            }
    
            if (user.email.indexOf("@") === -1) {
                throw new Error("Invalid Email");
            }
    
            if (user.password.length < 6) {
                throw new Error("Password must have at least 6 characters");
            }
    
            const id = generateId();
            
            const hashPassword = await hashManager.hash(user.password);

            await userDatabase.createUser(id, user.email, user.name, hashPassword, user.role);
    
            const token = authenticator.generateToken({ id:user.id, role: user.role });
    
            return token;
    
        } catch (error:any) {
            throw new Error(error.message || "Error creating user. Please check your system administrator.");
        }
    }

    async getUserByEmail(user: {email: string; password: string;}) {

        if (!user.email || !user.password) {
            throw new Error("Please fill all the fields");
        }

        const userFromDB = await userDatabase.getUserByEmail(user.email);

        const hashCompare = await hashManager.compare(user.password, userFromDB.password);
         
        const accessToken: string = authenticator.generateToken({ id: userFromDB.id, role: userFromDB.role});

        if (!hashCompare) {
            throw new Error("Invalid Password!");
        }

        return accessToken;
    }

    async get(token: string) {

        if (!token) {
            throw new Error("Para realizar essa operação é necessário ter token de autorização.")
        }

        authenticator.getTokenData(token)

        return await userDatabase.get();
    }

    async deleteUser(input: {id:string, token:string}) {		
        const verifiedToken = authenticator.getTokenData(input.token);

        if (!input.token) {
            throw new Error("Para realizar essa operação é necessário ter token de autorização.")
        }

		if(verifiedToken.role !== "ADMIN"){
			throw new Error("Apenas administradores podem deletar usuários!")
		}

        return await userDatabase.deleteUser(input.id);
    }

}
