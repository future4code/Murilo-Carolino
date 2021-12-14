import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Authenticator } from "../services/Authenticator";
import { GenerateID } from "../services/GenerateID";
import { HashManager } from "../services/HashManager";
import { user } from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { email, password, role } = req.body

      if (!email || !email.includes("@")) {
         res.statusCode = 422
         throw new Error("O campo 'email' está vazio ou está sem o símbolo de endereço eletrônico '@'")
      }

      if (!password || password.length < 6) {
         res.statusCode = 422
         throw new Error("A senha deve conter mais de 6 caracteres, ou o campo 'password' está vazio")
      }

      if (!role) {
         res.statusCode = 422
         throw new Error("O campo 'role' está vazio")
      }
      const [user] = await connection('aula56_User')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const id: string = new GenerateID().id()

      const cypherPassword: string = new HashManager().createHash(password)

      const newUser: user = {
         id,
         email,
         password: cypherPassword,
         role
      }

      await connection('aula56_User')
         .insert(newUser)

      const token: string = new Authenticator().generateToken({ id, role })
      res.status(201).send({ token: token })

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.sqlMessage || error.message })
      }
   }
}