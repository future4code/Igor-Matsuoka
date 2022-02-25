import { Request, Response } from "express";
import { RecipeDatabase } from "../Data/recipeDatabase";
import { Authenticator } from "../Services/authenticator";

export async function changeRecipe(req: Request, res: Response) {
    let errorCode = 400
    try {
        const token = req.headers.authorization
        const id = req.params.id as string

        const {title, description} = req.body

        if (!title || !description) {
            errorCode = 422
            throw new Error("Insira todas as informações")
        }

        if(!token){
            errorCode = 422
            throw new Error("É necessário uma autorização")
        }

        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token)
        const idCreator = await tokenData.id

        const recipeDatabase = new RecipeDatabase()
        const recipe = await recipeDatabase.getRecipeById(id)

        if(idCreator !== recipe.getCreatorId()){
            errorCode = 409
            throw new Error("Esse usuário não pode alterar essa receita")
        }

        recipeDatabase.changeRecipe(title, description, id, tokenData.id)

        res.status(200).send({message: "Receita Alterada com sucesso!"})

    } catch (error:any) {
        res.status(500).send(error.message)
    }
}