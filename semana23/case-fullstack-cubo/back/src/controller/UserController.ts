import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserDatabase } from "../data/UserDatabase";
import { UserInputDTO } from "../model/User";
import { IdGenerator } from "../services/IdGenerator";

export class UserController {

    async createUser(req: Request, res: Response) {

        try {

            const input: UserInputDTO = {
                name: req.body.name,
                lastName: req.body.lastName,
                participation: req.body.participation
            }

            const userBusiness = new UserBusiness(new IdGenerator, new UserDatabase)
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

    async getAllUsers(req: Request, res: Response) {

        try {

            const userBusiness = new UserBusiness(new IdGenerator, new UserDatabase)
            const allUsers = await userBusiness.getAllUsers()

            res.status(200).send(allUsers)

        } catch (error) {
            if (error instanceof Error) {
                res.status(400).send({ message: error.message })
            } else {
                res.status(400).send({ message: "Unexpected error!"})
            }
        }
    }
}