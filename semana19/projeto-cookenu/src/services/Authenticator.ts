import { sign, verify } from "jsonwebtoken"

export interface AuthenticationData {
    id: string
}

export class Authenticator {

    generateToken = (payload: AuthenticationData) => {
        const token = sign(
            {payload},
            process.env.JWT_KEY as string,
            {expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN}
        )

        return token
    }

    getTokenData = (token: string): AuthenticationData | null => {
        try {
            const tokenData = verify(
                token,
                process.env.JWT_KEY as string
            ) as any

            return tokenData.payload
            
        } catch (error) {
            console.log(error)
            return null
        }
    }
}