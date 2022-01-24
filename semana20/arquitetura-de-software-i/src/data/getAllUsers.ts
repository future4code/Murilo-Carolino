import { connection } from "../connection"
import { user } from "../types/user"

export const getAllUsers = async (): Promise<any> => {
    try {
        const result = await connection("User_Arq")
            .select("*")

        return result

    } catch (error: any) {
        throw new Error(error.slqMessage || error.message)
    }
}