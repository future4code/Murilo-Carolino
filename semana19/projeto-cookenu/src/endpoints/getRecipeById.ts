import { Request, Response } from "express";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { Authenticator } from "../services/Authenticator";

export default async function getRecipeById(req: Request, res: Response): Promise<void> {
    try {
        
        const token = req.headers.authorization
        const id = req.params.id

        if(!token || !id) {
            res.statusCode = 422
            throw new Error("É necessário um id e uma autorização a ser passada nos headers")
        }

        const tokenData = new Authenticator().getTokenData(token)

        if (!tokenData) {
            res.statusCode = 401
            throw new Error("token inválido.")
        }

        const recipeDB = await new RecipeDatabase().getRecipe(id)

        if (!recipeDB) {
            res.statusCode = 404
            throw new Error("Id de receita não econtrado")    
        }
        
        res.status(200).send(recipeDB)

    } catch (error:any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.sqlMessage || error.message })
        }
    }
}