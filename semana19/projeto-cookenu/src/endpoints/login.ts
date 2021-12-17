import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";

export default async function login(req: Request, res: Response): Promise<void> {
    try {

        const { email, password } = req.body

        if (!email || !password) {
            res.statusCode = 422
            throw new Error("Os campos 'email' e 'password' são obrigatórios.")
        }

        const userDB = new UserDatabase()
        const user = await userDB.findUserByEmail(email)

        if (!user) {
            res.statusCode = 409
            throw new Error('Esse email não está cadastrado!')
        }

        const passwordIsCorrect: boolean = new HashManager().compareHash(password, user.getPassword())

        if (!passwordIsCorrect) {
            res.statusCode = 401
            throw new Error('Email ou senha incorretos!')
        }

        const token: string = new Authenticator().generateToken({id: user.getId()})

        res.status(201).send({message: 'Usuário logado com sucesso!', token})

    } catch (error: any) {

        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.sqlMessage || error.message })
        }
    }
}