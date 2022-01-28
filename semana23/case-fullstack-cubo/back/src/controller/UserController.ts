import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO } from "../model/User";

export class UserController {

    async createUser(req: Request, res: Response) {

        try {

            const input: UserInputDTO = {
                name: req.body.name,
                lastName: req.body.lastName,
                participation: req.body.participation
            }

            const userBusiness = new UserBusiness()
            await userBusiness.createUser(input)


            res.status(201).send({ message: "User created successfully!" })

        } catch (error) {
            if (error instanceof Error) {
                res.status(400).send({ message: error.message })
            } else {
                res.status(400).send({ message: "Unexpected error!"})
            }
        }
    }
}