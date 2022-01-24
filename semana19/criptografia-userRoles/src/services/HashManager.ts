import { compareSync, genSaltSync, hashSync } from "bcryptjs"


export class HashManager {

    createHash = (plainText: string): string => {

        const cost: number = 12
        const salt: string = genSaltSync(cost)
        const cypherText: string = hashSync(plainText, salt)

        return cypherText
    }

    compareHash = (plainText: string, cypherText: string): boolean => {
        return compareSync(plainText, cypherText)
    }
}