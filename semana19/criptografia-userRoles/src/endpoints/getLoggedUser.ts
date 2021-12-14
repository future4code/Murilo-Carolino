import { Request, Response } from "express";
import { functionGetUserById } from "../data/functionGetUserById";
import { Authenticator } from "../services/Authenticator";
import { USER_ROLES } from "../types";


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

      if (tokenData.role !== USER_ROLES.NORMAL) {
         res.statusCode = 403
         throw new Error("Somente usuários do tipo 'normal' podem acessar essa funcionalidade");
      }

      const user = await functionGetUserById(tokenData.id)
      console.log(user)
      
      res.status(200).send({
         id: user.id,
         email: user.email,
         role: user.role
      })

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).end()
      } else {
         res.send(error.message)
      }
   }
}