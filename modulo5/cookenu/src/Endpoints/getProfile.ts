import { Request, Response } from "express";
import { UserDatabase } from "../Data/userDatabase";
import { Authenticator } from "../Services/authenticator";

export async function getUserProfile(req: Request, res: Response) {
    let errorCode = 400
    try {
        const token = req.headers.authorization

        const id = req.params.id

        if(!token){
            errorCode = 422
            throw new Error("É necessário uma autorização")
        }

        const authenticator = new Authenticator()
        authenticator.getTokenData(token)

        const userDatabase = new UserDatabase()
        const userProfile = await userDatabase.getUserById(id)
        
        res.status(200).send(userProfile)

    } catch (error:any) {
        res.status(500).send(error.message)
    }
}