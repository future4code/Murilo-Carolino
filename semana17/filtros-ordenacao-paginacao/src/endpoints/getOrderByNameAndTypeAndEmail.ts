import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user } from "../types"


export const getOrderByNameAndTypeAndEmail = async (req: Request, res: Response): Promise<void> => {
    try {
        const sort = req.query.sort === "type" ? "type" : "email" || "name" ? "name" : "email"
        const order = req.query.order === "DESC" ? "DESC" : "ASC"

        const result = await connection("aula49_exercicio")
            .select()
            .orderBy(sort, order)

        const users = result.map(toUser)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No users found")
        }

        res.status(200).send(users)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}

const toUser = (input: any): user => {
    return {
        id: input.id,
        name: input.name,
        email: input.email,
        type: input.type
    }
}