import { Recipe } from "../entities/Recipe";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {

    async createRecipe(recipe: Recipe) {
        try {

            await RecipeDatabase.connection('Cookenu_recipe')
                .insert({
                    id: recipe.getId(),
                    title: recipe.getTitle(),
                    description: recipe.getDescription(),
                    creationDate: recipe.getCreationDate(),
                    userId: recipe.getUserId()
                })
                
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message )
        }
    }

    async getRecipe(id: string): Promise<Recipe> {
        try {
            const recipe = await RecipeDatabase.connection('Cookenu_recipe')
                .select('id', 'title', 'description', 'creationDate')
                .where("id", id)

            return recipe[0]

        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message )
        }
    }
}