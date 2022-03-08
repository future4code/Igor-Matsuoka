import { SignupInputDTO } from "../Controller/UserController";
import UserData from "../Data/UserData";
import { User } from "../Model/User";
import { HashManager } from "../Services/hashManager";
import { Authenticator } from "../Utilities/authenticator";
import { IdGenerator } from "../Utilities/idGenerator";

export default class UserBusiness {
    constructor(
        private userData: UserData,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ){

    }

    signup = async (input: SignupInputDTO) => {
        const {name, email, password} = input

        if(!name || !email || !password){
            throw new Error("Insira todos os campos!")
        }

        const registeredUser = await this.userData.findByEmail(email)

        if(registeredUser){
            throw new Error("Email já cadastrado!")
        }

        const id = this.idGenerator.generate()

        const hashedPassword = await this.hashManager.hash(password)

        const user = new User(
            id,
            name,
            email,
            hashedPassword
        )
        await this.userData.insert(user)
        const token = this.authenticator.getTokenData(id)

        return token
    }
}