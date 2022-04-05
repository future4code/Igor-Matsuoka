import { Request, Response } from "express"
import UserBusiness from "../Business/UserBusiness"
import UserData from "../Data/User/UserData"
import { InputDTO } from "../Model/User"

export default class UserController {
    private userBusiness: UserBusiness
    constructor (
    ){
        this.userBusiness = new UserBusiness(new UserData())
    }


    submitUser = async (req: Request, res: Response) => {
        const {name, lastName, participation} = req.body

        const input: InputDTO = {
            name,
            lastName,
            participation
        }

        try {
            const user = await this.userBusiness.insertUser(input)
            res.send({message: "Usuário inserido com sucesso!", user})

        } catch (error:any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }
    }

}