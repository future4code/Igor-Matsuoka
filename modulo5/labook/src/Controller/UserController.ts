import { Request, Response } from "express"
import UserBusiness from "../Business/UserBusiness"

export type SignupInputDTO = {
    name: string
    email: string
    password: string
}

export default class UserController {
    constructor (
        private userBusiness: UserBusiness
    ){

    }


    signup = async (req: Request, res: Response) => {
        const {name, email, password} = req.body

        const input: SignupInputDTO = {
            name,
            email,
            password
        }

        try {
            const token = await this.userBusiness.signup(input)
            res.send({message: "Usuário Cadastrado com sucesso!", token})
        } catch (error:any) {
            res.status(500).send(error.message)
        }
    }
}