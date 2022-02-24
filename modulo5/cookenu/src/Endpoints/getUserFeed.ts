import { Request, Response } from "express";
import { Authenticator } from "../Services/authenticator";
import { FeedDatabase } from "../Data/feedDatabase";

export async function getUserFeed(req: Request, res: Response) {
    let errorCode = 400
    try {
        const token = req.headers.authorization

        if(!token){
            errorCode = 422
            throw new Error("É necessário uma autorização")
        }

        const authenticator = new Authenticator()
        console.log(token)
        const tokenData = authenticator.getTokenData(token)

        const feedDatabase = new FeedDatabase()
        const feed = await feedDatabase.getFeed(tokenData.id)

        res.status(200).send(feed)

    } catch (error:any) {
        res.status(500).send(error.message)
    }
}