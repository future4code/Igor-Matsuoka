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
            .select("id", "title", "description", "createdAt")
            .where({id: id})

            return result[0] && Recipe.toUserModel(result[0])
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
        
    }
}