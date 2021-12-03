import { Request, Response } from "express";
import { connection } from "../connection";
import { Product, User } from "../types";

export const createPurchase = async (req: Request, res: Response): Promise<void> => {
    try {

        const { quantity, user_id, product_id } = req.body

        const [user]: User[] = await connection("labecommerce_users")
            .select()
            .where({ id: user_id })

        if (!user) {
            throw new Error("Usuário não encontrado no banco de dados.(user_id)")
        }

        const [product]: Product[] = await connection("labecommerce_products")
            .select()
            .where({ id: product_id })

        if (!product) {
            throw new Error("Produto não encontrado no banco de dados.(product_id)")
        }

        if (!quantity || !user_id || !product_id) {
            throw new Error("É necessário preencher todos os parâmetros.")
        }

        const total_price = product.price * quantity

        const purchase = {
            id: Date.now().toString(),
            quantity: quantity,
            total_price: total_price,
            user_id: user_id,
            product_id: product_id
        }

        await connection("labecommerce_purchases")
            .insert(purchase)

        res.status(201).send({ message: "Compra realizada com sucesso!" })

    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }
}