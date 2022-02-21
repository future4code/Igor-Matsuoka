import { Request, Response } from "express"
import { createUser } from "../data/createUser"
import { generateId } from "../services/generateId"
import { generateToken } from "../services/generateToken"

export const postUser = async (req: Request, res: Response):Promise<void> => {
    try {
        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
        }

        if (!req.body.password || req.body.password.length < 6) {
            throw new Error("Invalid password");
        }

        const userData = {
            email: req.body.email,
            password: req.body.password,
        };

        const id = generateId()

        await createUser(id, userData.email, userData.password)

        const token = generateToken({
            id
        })

        res.status(201).send({token: "Token gerado pelo jwt"})
    } catch (error:any) {
        res.send({error, message:error.message})
    }
}