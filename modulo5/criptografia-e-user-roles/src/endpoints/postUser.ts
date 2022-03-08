import { hash } from "bcryptjs"
import { Request, Response } from "express"
import { createUser } from "../services/createUser"
import { generateId } from "../services/generateId"
import { generateToken } from "../services/generateToken"
import { HashManager } from "../services/hashManager"


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
            role: req.body.role
        };

        const id = generateId()

        const cypherPassword:string = new HashManager().createHash(userData.password)

        await createUser(id, userData.email, cypherPassword, userData.role)

        const token = generateToken({
            id,
            role: userData.role
        })

        res.status(200).send({token});
    } catch (error:any) {
        res.send({error, message:error.message})
    }
}