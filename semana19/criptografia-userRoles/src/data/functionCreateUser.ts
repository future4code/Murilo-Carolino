import { connection } from "./connection"

export const functionCreateUser = async (id: string, email: string, password: string) => {
    await connection('aula56_User')
        .insert({
            id: id,
            email: email,
            password: password
        })
}