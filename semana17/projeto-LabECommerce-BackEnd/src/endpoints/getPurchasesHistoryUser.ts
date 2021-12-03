import { Request, Response } from "express";
import { connection } from "../connection";

export const getPurchasesHistoryUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const {user_id} = req.params

        const purchases = await connection.raw(`
            SELECT * FROM labecommerce_purchases
            JOIN labecommerce_users
            ON labecommerce_purchases.user_id = labecommerce_users.id
            JOIN labecommerce_products
            ON labecommerce_purchases.product_id = labecommerce_products.id
            WHERE user_id = "${user_id}";
        `)
        
        res.status(200).send(purchases[0])

    } catch (error:any) {
        res.status(400).send({message: error.message})
    }
}