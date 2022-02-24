import { Request, Response } from "express";
import { RecipeDatabase } from "../Data/recipeDatabase";
import { Authenticator } from "../Services/authenticator";
import { IdGenerator } from "../Services/idGenerator";
import { Recipe } from "../Types/Recipe";
import { dataAtualFormatada } from "../Services/formatData";

export async function createRecipe(req: Request, res: Response) {
    let errorCode = 400
    try {
        const token = req.headers.authorization

        const {title, description} = req.body

        if (!title || !description) {
            errorCode = 422
            throw new Error("Insira todas as informações")
        }

        if(!token){
            errorCode = 422
            throw new Error("É necessário uma autorização")
        }

        const recipeDatabase = new RecipeDatabase()

        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token)

        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        const createdAt = dataAtualFormatada()
        const creator_id = tokenData.id

        const newRecipe = new Recipe(id, title, description, createdAt, creator_id)
        
        await recipeDatabase.createRecipe(newRecipe)

        res.status(200).send({message: "Receita criada com sucesso!"})

    } catch (error:any) {
        res.status(500).send(error.message)
    }
}