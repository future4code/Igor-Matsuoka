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

    insertUser = async (input: InputDTO) => {
        const {name, lastName, participation} = input

        if(!name || !lastName || !participation){
            throw new Error("Insira todos os campos!")
        }

        const id:string = this.idGenerator.generate()

        const user = new User(
            id,
            name,
            lastName,
            participation
        )

        await this.userData.insert(user)
    }
}