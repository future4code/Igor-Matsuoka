import { Request, Response } from "express";
import { UserDatabase } from "../Data/userDatabase";
import { Authenticator } from "../Services/authenticator";
import { HashManager } from "../Services/hashManager";
import { IdGenerator } from "../Services/idGenerator";
import { User } from "../Types/User";

export async function signUp(req: Request, res: Response) {
    let errorCode = 500
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            errorCode = 422
            throw new Error("Insira todas as informações")
        }

        const userDatabase = new UserDatabase()
        const user = await userDatabase.findUserByEmail(email)

        if (user) {
            res.status(409).send("E-mail já cadastrado")
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)

        const newUser = new User(id, name, email, hashPassword)

        await userDatabase.createUser(newUser)

        const authenticator = new Authenticator()
        const token = authenticator.generate({id})

        res.status(200).send({ message: "Usuário criado com sucesso!", token })

    } catch (error: any) {
        res.status(500).send(error.message)
    }
}