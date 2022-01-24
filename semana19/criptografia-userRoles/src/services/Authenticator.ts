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

    getTokenData = (token: string): authenticationData | null => {
        try {
            const tokenData = verify(
                token,
                process.env.JWT_KEY
            ) as any

            return {
                id: tokenData.payload.id,
                role: tokenData.payload.role
            }
        } catch (error) {
            console.log(error)
            return null
        }
    }
}