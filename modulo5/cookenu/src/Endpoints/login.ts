import { Request, Response } from "express";
import { UserDatabase } from "../Data/userDatabase";
import { Authenticator } from "../Services/authenticator";
import { HashManager } from "../Services/hashManager";
import { IdGenerator } from "../Services/idGenerator";

export async function login(req: Request, res: Response) {
    let errorCode = 500
    try {
        const { email, password } = req.body

        if ( !email || !password) {
            errorCode = 422
            throw new Error("Insira todas as informações")
        }

        const userDatabase = new UserDatabase()
        const user = await userDatabase.findUserByEmail(email)

        if (!user) {
            res.status(409).send("Não existe usuário com este e-mail")
        }

        const hashManager = new HashManager()
        const passwordIsCorrect = hashManager.compareHash(password, user.getPassword())

        if(!passwordIsCorrect){
            res.status(401).send("E-mail e/ou senha incorreto(s)")
        }

        const authenticator = new Authenticator()
        const token = authenticator.generate({id: user.getId()})

        res.status(200).send({ message: "Usuário logado com sucesso!", token })

    } catch (error: any) {
        res.status(500).send(error.message)
    }
}
