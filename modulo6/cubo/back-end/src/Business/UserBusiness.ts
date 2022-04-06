import { InputDTO, User } from "../Model/User";
import { IdGenerator } from "../Utilities/idGenerator";
import { UserRepository } from "./UserRepository";


export default class UserBusiness {
    private idGenerator: IdGenerator;
    private userData: UserRepository

    constructor(
        userDataImplementation: UserRepository
    ){
        this.userData = userDataImplementation
        this.idGenerator = new IdGenerator()
    }

    insertUser = async (input: InputDTO):Promise<void> => {
        const {name, lastName, participation} = input

        if(!name || !lastName || !participation){
            throw new Error("Insira todos os campos!")
        }

        if(participation < 0) {
            throw new Error("Não é possível uma participação negativa!")
        }

        if(participation > 100) {
            throw new Error("Não é possível uma participação acima da porcentagem máxima!")
        }

        const id:string = this.idGenerator.generate()

        const user = new User(
            id,
            name,
            lastName,
            participation
        )

        let sum = await this.userData.sum()
        
        if (sum >= 100) {
            throw new Error("A participação já atingiu seu máximo de 100%!")
        }

        if (sum < 100) {
            const maxValue = 100 - sum

            if (participation > maxValue) {
                throw new Error(`A máxima participação permitida é igual a ${maxValue}`)
            }
        }

        const verifyUser = await this.userData.existingUser(name, lastName)
        
        if(verifyUser?.length === 0){
            await this.userData.insert(user)
        } else {
            await this.userData.updateParticipation(participation, name, lastName)
        }

    }

    getUsers = async ():Promise<User[]> => {
        const result = await this.userData.get()

        if(!result) {
            throw new Error("Ainda não existem usuários!")
        }
       
        return result
    }
}