import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";


export class UserController {

   public async signup(req: Request, res: Response) {
      try {
         const { name, role, email, password } = req.body
         const result = await UserBusiness.signup(
            name,
            email,
            password,
            role
         )

         res.status(200).send(result);
      } catch (error) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }

   public async login(req: Request, res: Response) {
      try {
         const { email, password } = req.body
         const result = await UserBusiness.login(email, password);
         res.status(200).send(result);
      } catch (error) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }

   public async getUserById(req: Request, res: Response) {
      try {

         const id = req.params.id
         
         const result = await UserBusiness.getUserById(id)

         res.status(200).send(result)

      } catch (error) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }
}

export default new UserController()