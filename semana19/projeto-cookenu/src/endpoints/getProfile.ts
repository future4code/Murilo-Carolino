import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export default async function getProfile(req: Request, res: Response): Promise<void> {
    try {
        
        const token = req.headers.authorization

        if(!token) {
            res.statusCode = 422
            throw new Error("É necessária uma autorização a ser passada nos headers.")
        }

        const tokenData = new Authenticator().getTokenData(token)

        if (!tokenData) {
            res.statusCode = 401
            throw new Error("token inválido.")
        }

        const userDB = await new UserDatabase().getUserProfile(tokenData.id)
        
        res.status(200).send(userDB)

    } catch (error:any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.sqlMessage || error.message })
        }
    }
}