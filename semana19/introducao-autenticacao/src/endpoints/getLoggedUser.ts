import { Request, Response } from "express";
import { functionGetUserById } from "../data/functionGetUserById";
import { Authenticator } from "../services/authenticator";

export default async function getLoggedUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const token = req.headers.authorization as string

      const tokenData = new Authenticator().getTokenData(token)

      if (!tokenData) {
         res.statusCode = 401
         throw new Error("token invalido ou nao passado no headers")
      }

      const user = await functionGetUserById(tokenData.id)

      res.status(200).send({
         id: user.id,
         email: user.email
      })

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).end()
      }

      res.end()
   }
}