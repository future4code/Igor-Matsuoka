import { Request, Response } from "express";
import { AdminDatabase } from "../Data/adminDatabase";
import { RecipeDatabase } from "../Data/recipeDatabase";
import { UserDatabase } from "../Data/userDatabase";
import { Authenticator } from "../Services/authenticator";

export async function deleteRecipe(req: Request, res: Response) {
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

        const recipeDatabase = new RecipeDatabase()
        const recipe = await recipeDatabase.getRecipeById(id)

        const adminDatabase = new AdminDatabase()
        const idAdmin = await adminDatabase.getUserByRole(idCreator)

        if(idAdmin === undefined){
            if(idCreator !== recipe.getCreatorId()){
                errorCode = 409
                throw new Error("Esse usuário não pode alterar essa receita")
            }
            recipeDatabase.deleteRecipe(id, idCreator)

        } else if (idAdmin){
            recipeDatabase.deleteRecipeByAdmin(id)
        }

        res.status(200).send({message: "Receita deletada com sucesso!"})

    } catch (error:any) {
        res.status(500).send(error.message)
    }
}