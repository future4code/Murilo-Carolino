import { compareSync, genSaltSync, hashSync } from "bcryptjs"

export class HashManager {
    
    createHash = ( plainText: string ) => {
        const salt = genSaltSync(12)
        const cypherText = hashSync(plainText, salt)

        return cypherText
    }

    compareHash = (
        plainText: string,
        cypherText: string
    ) => {
        return compareSync(plainText, cypherText)
    }
}