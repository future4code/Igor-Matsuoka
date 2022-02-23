import { Request, Response } from "express";
import { UserDatabase } from "../Data/userDatabase";
import { Authenticator } from "../Services/authenticator";

export async function getUserProfile(req: Request, res: Response) {
    let errorCode = 400
    try {
        const token = req.headers.authorization

        if(!token){
            errorCode = 422
            throw new Error("É necessário uma autorização")
        }

        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token)

        if(!tokenData){
            errorCode = 401
            throw new Error("Você não está autorizado")
        }

        const userDatabase = new UserDatabase()
        const userProfile = await userDatabase.getUserById(tokenData.id)
        
        res.status(200).send(userProfile)

    } catch (error:any) {
        res.status(500).send(error.message)
    }
}