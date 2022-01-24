import { sign, verify } from "jsonwebtoken";
import { authenticationData } from "../types";
import dotenv from "dotenv"

dotenv.config()

export class Authenticator {

    generateToken = (payload: authenticationData) => {
        const token = sign(
            {payload},
            process.env.JWT_KEY,
            {expiresIn: '10min'}
        )

        return token
    }

    getTokenData = (token: string) => {
        try {
            const tokenData = verify(
                token,
                process.env.JWT_KEY
            ) as any

            return {
                id: tokenData.payload.id
            }
        } catch (error) {
            console.log(error)
            return null
        }
    }
}