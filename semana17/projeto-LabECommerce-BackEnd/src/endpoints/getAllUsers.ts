import { Request, Response } from "express";
import { connection } from "../connection";
import { User } from "../types";

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {

        const usersOrigin: User[] = await connection("labecommerce_users")
        const purchase = await connection.raw(`
        SELECT labecommerce_purchases.id, quantity, total_price, labecommerce_products.name as productName, labecommerce_users.name as userName FROM labecommerce_purchases
        JOIN labecommerce_users
        ON labecommerce_purchases.user_id = labecommerce_users.id
        JOIN labecommerce_products
        ON labecommerce_purchases.product_id = labecommerce_products.id;
    `)

        const purchases = purchase[0]
        const users = {...usersOrigin, purchases}

        res.status(200).send({users})

    } catch (error:any) {
        res.status(400).send({message: error.message})
    }
}