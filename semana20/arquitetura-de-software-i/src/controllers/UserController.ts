import { Request, Response } from "express";
import { UserBusiness } from "../business/User/UserBusiness";


export class UserController {

    signupController = async (
        req: Request,
        res: Response
    ) => {
        try {

            const { name, email, password, role } = req.body

            const token = await new UserBusiness().signupBusiness({ name, email, password, role })

            res
                .status(201)
                .send({
                    message: "Usuário criado!",
                    token
                })

        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }

    loginController = async (
        req: Request,
        res: Response
    ) => {
        try {

            const { email, password } = req.body

            const token = await new UserBusiness().loginBusiness({ email, password })

            res.send({
                message: "Usuário logado!",
                token
            })

        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }

    getAllUsersController = async (
        req: Request,
        res: Response
    ) => {
        try {
            
            const token = req.headers.authorization as string

            const users = await new UserBusiness().getAllUsersBusiness(token)

            res.send(users).status(200)

        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }

    deleteUserController = async (
        req: Request,
        res: Response
    ) => {
        try {
            
            const id = req.params.id
            const token = req.headers.authorization as string

            await new UserBusiness().deleteUserBusiness(id, token)

            res.status(200).send({ message: "Usuário apagado com sucesso" });

        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}