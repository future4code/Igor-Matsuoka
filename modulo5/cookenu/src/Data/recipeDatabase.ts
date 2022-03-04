import { USER_ROLES } from "../Types/Admin";
import { Recipe } from "../Types/Recipe";
import { BaseDatabase } from "./baseDatabase";

export class RecipeDatabase extends BaseDatabase {
    public async createRecipe(recipe: Recipe): Promise<void> {
        try {
            await BaseDatabase.connection("Recipe")
            .insert({
                id: recipe.getId(),
                title: recipe.getTitle(),
                description: recipe.getDescription(),
                createdAt: recipe.getCreatedAt(),
                creator_id: recipe.getCreatorId()
            })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async getRecipeById(id: string): Promise<Recipe>{
        try {
            const result = await BaseDatabase.connection("Recipe")
            .select("id", "title", "description", "createdAt", "creator_id")
            .where({id: id})

            return result[0] && Recipe.toUserModel(result[0])
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
        
    }

    public async changeRecipe(title:string, description:string, id:string, creator_id: string): Promise<void> {
        try {
            const result = await BaseDatabase.connection.raw(`
                UPDATE Recipe
                SET title = '${title}', description ='${description}'
                WHERE id = '${id}' AND creator_id = '${creator_id}'
            `)

            return result[0]
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async deleteRecipe(id: string, creator_id: string): Promise<void> {
        try {
            const result = await BaseDatabase.connection.raw(`
                DELETE FROM Recipe WHERE id = '${id}' AND creator_id = '${creator_id}'
            `)

            return result[0]
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async deleteRecipeByAdmin(id: string): Promise<void> {
        try {
            const result = await BaseDatabase.connection.raw(`
                DELETE Recipe FROM Recipe 
                JOIN User
                ON Recipe.creator_id = User.id
                WHERE Recipe.id = '${id}'
            `)

            return result[0]
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}