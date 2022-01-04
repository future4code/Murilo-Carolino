import { config } from "dotenv"
import { JwtPayload, sign, verify } from "jsonwebtoken"
import { authenticationData } from "../model/User"

config()

export class Authenticator {

    generateToken = (
        payload: authenticationData
    ) => {
        return sign(
            payload,
            process.env.JWT_KEY!,
            {
                expiresIn: "12h"
            }
        )
    }

    getTokenData = (token: string): authenticationData | null => {
        try {
            
            const tokenData = verify(
                token,
                process.env.JWT_KEY!
            ) as JwtPayload

            return {
                id: tokenData.id
            }
        } catch (error) {
            return null
        }
    }
}