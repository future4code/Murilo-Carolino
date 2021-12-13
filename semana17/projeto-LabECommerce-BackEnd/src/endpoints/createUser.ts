import { Request, Response } from "express";
import { connection } from "../connection";
import { User } from "../types";

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        
        const {name, email, password} = req.body

        if(!name || !email || !password) {
            throw new Error("É necessário preencher todos os parâmetros.")
        }

        const user: User = {
            id: Date.now().toString(),
            name: name,
            email: email,
            password: password
        }

        await connection("labecommerce_users")
        .insert(user)

        res.status(201).send({message: "Usuário criado com sucesso!"})

    } catch (error:any) {
        res.status(400).send({message: error.message})
    }
}