import { Request, Response } from "express";
import { AdminDatabase } from "../Data/adminDatabase";
import { FollowerDatabase } from "../Data/followerDatabase";
import { RecipeDatabase } from "../Data/recipeDatabase";
import { UserDatabase } from "../Data/userDatabase";
import { Authenticator } from "../Services/authenticator";

export async function deleteAccount(req: Request, res: Response) {
    let errorCode = 400
    try {
        const token = req.headers.authorization
        const id = req.params.id as string

        if(!token){
            errorCode = 422
            throw new Error("É necessário uma autorização")
        }

        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token)
        const idCreator = await tokenData.id

        const userDatabase = new UserDatabase()

        const recipeDatabase = new RecipeDatabase()

        const followerDatabase = new FollowerDatabase()

        const adminDatabase = new AdminDatabase()
        const idAdmin = await adminDatabase.getUserByRole(idCreator)

        if(idAdmin === undefined){
            errorCode = 409
            throw new Error("Esse usuário não pode deletar uma conta!")
        
        } else if (idAdmin){
            recipeDatabase.deleteRecipeByCreator(id)
            followerDatabase.deleteFollowerById(id)
            followerDatabase.deleteFollowedById(id)
            userDatabase.deleteUser(id)
        }

        res.status(200).send({message: "Conta deletada com sucesso!"})

    } catch (error:any) {
        res.status(500).send(error.message)
    }
}