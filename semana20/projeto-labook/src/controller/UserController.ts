import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {

    signUp = async (
        req: Request, 
        res: Response) => {
            try {
                
                const {nome, email, senha} = req.body
                if (!nome || !email || !senha) {
                    res.statusCode = 422
                    throw new Error("Os campos 'nome', 'email' e 'senha' são obrigatórios.")
                }

                const token = await new UserBusiness().signUp(nome, email, senha)

                res.status(201).send({message: "Usuário criado com sucesso!", token})

            } catch (error: any) {
                if (res.statusCode === 200) {
                    res.status(500).send({ message: "Internal server error" })
                } else {
                    res.send({ message: error.sqlMessage || error.message })
                }
            }
    }

    login = async (
        req: Request,
        res: Response) => {
            try {
                
                const {email, senha} = req.body
                if (!email || !senha) {
                    res.statusCode = 422
                    throw new Error("Os campos 'email' e 'senha' são obrigatórios.")
                }
            
                const token = await new UserBusiness().login(email, senha)
                if (!token) {
                    res.statusCode = 400
                    throw new Error("Entrada de senha incorreta!")
                }


                res.status(200).send({message: "Usuário logado com sucesso!", token})

            } catch (error:any) {
                if (res.statusCode === 200) {
                    res.status(500).send({ message: "Internal server error" })
                } else {
                    res.send({ message: error.sqlMessage || error.message })
                }
            }
        }
}