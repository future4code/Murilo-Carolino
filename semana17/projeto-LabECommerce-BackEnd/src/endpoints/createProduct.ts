import { Request, Response } from "express";
import { connection } from "../connection";
import { Product } from "../types";

export const createProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        
        const {name, price, image_url} = req.body

        if(!name || !price || !image_url) {
            throw new Error("É necessário preencher todos os parâmetros.")
        }

        const product: Product = {
            id: Date.now().toString(),
            name: name,
            price: price,
            image_url: image_url
        }

        await connection("labecommerce_products")
        .insert(product)

        res.status(201).send({message: "Produto criado com sucesso!"})

    } catch (error:any) {
        res.status(400).send({message: error.message})
    }
}