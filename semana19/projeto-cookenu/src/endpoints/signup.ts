import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { User } from "../entities/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";


export default async function signup(req: Request, res: Response): Promise<void> {
    try {

        const { name, email, password } = req.body

        if (!name || !email || !password) {
            res.statusCode = 422
            throw new Error("Os campos 'name', 'email' e 'password' são obrigatórios.")
        }

        if (password.length < 6) {
            res.statusCode = 422
            throw new Error("A senha deve conter, no mínimo, 6 caracteres.")
        }


        const userDB = new UserDatabase()
        const user = await userDB.findUserByEmail(email)

        if (user) {
            res.statusCode = 409
            throw new Error('Email já cadastrado')
        }

        const id: string = new IdGenerator().id()

        const cypherPassword: string = new HashManager().createHash(password)

        const newUser = new User(
            id,
            name,
            email,
            cypherPassword
        )

        await userDB.createUser(newUser)
        const token: string = new Authenticator().generateToken({id})

        res.status(201).send({message: 'Usuário criado com sucesso!', token})

    } catch (error: any) {

        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.sqlMessage || error.message })
        }
    }
}