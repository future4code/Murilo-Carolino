import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user } from "../types"


export const getUsersFinal = async (req: Request, res: Response): Promise<void> => {
    try {
        const query = req.query.query || "%"
        const sort = req.query.sort === "type" ? "type" : "email" || "name" ? "name" : "email"
        const order = req.query.order === "ASC" ? "ASC" : "name" && "DESC"
        const page = Number(req.query.page) || 1
        const offset = 5 * (page - 1)


        const result = await connection("aula49_exercicio")
            .select()
            .where("name", "LIKE", `%${query}%`)
            .orWhere("email", "LIKE", `%${query}%`)
            .orderBy(sort, order)
            .limit(5)
            .offset(offset)

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