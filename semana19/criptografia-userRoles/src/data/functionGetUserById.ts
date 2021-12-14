import { connection } from "./connection"

export const functionGetUserById = async (id: string): Promise<any> => {
    const result = await connection('aula56_User')
        .select('*')
        .where('id', id)

    return result[0]
}