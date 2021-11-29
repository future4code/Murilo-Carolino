import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user } from "../types"


export const getTypesUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const type = req.params.type

        const result = await connection("aula49_exercicio")
            .where("type", type)

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

