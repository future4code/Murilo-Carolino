import { Request, Response } from "express";
import { functionGetUserByEmail } from "../data/functionGetUserByEmail";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";


export default async function login(
    req: Request,
    res: Response
): Promise<void> {
    try {

        const { email, password } = req.body

        if (!email || !email.includes("@")) {
            res.statusCode = 422
            throw new Error("O campo 'email' está vazio ou está sem o símbolo de endereço eletrônico '@'")
        }

        const user = await functionGetUserByEmail(email)

        const passwordIsCorrect: boolean = new HashManager().compareHash(password, user?.password)

        if (!user || !passwordIsCorrect) {
            res.statusCode = 401
            throw new Error("Credenciais inválidas!")
        }

        const token = new Authenticator().generateToken({id: user.id, role: user.role})
        res.status(200).send({token: token})

    } catch (error) {

        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.sqlMessage || error.message })
        }
    }
}