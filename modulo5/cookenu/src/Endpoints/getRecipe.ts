import { Request, Response } from "express";
import { RecipeDatabase } from "../Data/recipeDatabase";
import { Authenticator } from "../Services/authenticator";
import { IdGenerator } from "../Services/idGenerator";
import { Recipe } from "../Types/Recipe";
import { dataAtualFormatada } from "../Services/formatData";

export async function getRecipe(req: Request, res: Response) {
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

        const recipeDatabase = new RecipeDatabase()
        const recipeProfile = await recipeDatabase.getRecipeById(id)

        res.status(200).send(recipeProfile)

    } catch (error:any) {
        res.status(500).send(error.message)
    }
}