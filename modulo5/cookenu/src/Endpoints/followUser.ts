import { Request, Response } from "express";
import { UserDatabase } from "../Data/userDatabase";
import { Authenticator } from "../Services/authenticator";
import { FollowerDatabase } from "../Types/Follower";

export async function followUser(req: Request, res: Response) {
    let errorCode = 500
    try {
        const token = req.headers.authorization as string

        const { userToFollowId } = req.body

        if ( !userToFollowId ) {
            errorCode = 422
            throw new Error("Insira todas as informações")
        }

        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token)

        if(userToFollowId === tokenData.id){
            errorCode = 409
            throw new Error("Não é possível seguir a si mesmo")
        }

        const userDatabase = new UserDatabase()
        const user = await userDatabase.getUserById(userToFollowId)

        if (!user) {
            res.status(409).send("Não existe usuário com este id")
        }

        const newFollower = new FollowerDatabase()
        await newFollower.createFollower(userToFollowId, tokenData.id)

        res.status(200).send({ message: "Seguindo com sucesso!"})

    } catch (error: any) {
        res.status(500).send(error.message)
    }
}