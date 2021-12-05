import { Request, Response } from "express";
import { connection } from "../connection";
import { Product } from "../types";

export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
    try {

        const order = req.query.order === "desc"? "desc" : "asc"
        const search = req.query.search || "%"

        const products: Product[] = await connection("labecommerce_products")
            .orderBy("name", order)
            .where("name", "LIKE", `%${search}%`)
        
        res.status(200).send(products)

    } catch (error:any) {
        res.status(400).send({message: error.message})
    }
}