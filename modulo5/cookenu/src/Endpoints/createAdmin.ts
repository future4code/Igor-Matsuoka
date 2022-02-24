import { Request, Response } from "express";
import { AdminDatabase } from "../Data/adminDatabase";
import { Authenticator } from "../Services/authenticator";
import { HashManager } from "../Services/hashManager";
import { IdGenerator } from "../Services/idGenerator";
import { Admin, USER_ROLES } from "../Types/Admin";

export async function signupAdmin(req: Request, res: Response) {
    let errorCode = 500
    try {
        const { name, email, password } = req.body
        const role = USER_ROLES.ADMIN

        if (!name || !email || !password) {
            errorCode = 422
            throw new Error("Insira todas as informações")
        }

        const adminDatabase = new AdminDatabase()
        const admin = await adminDatabase.findUserByEmail(email)

        if (admin) {
            res.status(409).send("E-mail já cadastrado")
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)

        const newAdmin = new Admin(id, name, email, hashPassword, role)

        await adminDatabase.createAdmin(newAdmin)

        const authenticator = new Authenticator()
        const token = authenticator.generate({id})

        res.status(200).send({ message: "Administrador criado com sucesso!", token })

    } catch (error: any) {
        res.status(500).send(error.message)
    }
}