import { UserDatabase } from '../data/userDatabase';
import { Authenticator } from '../services/authenticator';
import { HashManager } from '../services/hashManager';
import { generateId } from '../services/idGenerator';
import { USER_ROLES } from '../types/userRoles';

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
            
            const hashManager = new HashManager()
            const hashPassword = await hashManager.hash(user.password);

            const userDatabase = new UserDatabase()
            await userDatabase.createUser(id, user.email, user.name, hashPassword, user.role);
    
            const authenticator = new Authenticator()
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

        const userDatabase = new UserDatabase()
        const userFromDB = await userDatabase.getUserByEmail(user.email);

        const hashManager = new HashManager()
        const hashCompare = await hashManager.compare(user.password, userFromDB.password);
         
        const authenticator = new Authenticator()
        const accessToken: string = authenticator.generateToken({ id: userFromDB.id, role: userFromDB.role});

        if (!hashCompare) {
            throw new Error("Invalid Password!");
        }

        return accessToken;
    }
}