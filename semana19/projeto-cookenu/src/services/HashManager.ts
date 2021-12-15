import { compareSync, genSaltSync, hashSync } from "bcryptjs"


export class HashManager {

    createHash = (plainText: string): string => {
        
        const rounds = Number(process.env.BCRYPT_COST)
        const salt: string = genSaltSync(rounds)
        const cypherText: string = hashSync(plainText, salt)

        return cypherText
    }

    compareHash = (plainText: string, cypherText: string): boolean => {
        return compareSync(plainText, cypherText)
    }
}