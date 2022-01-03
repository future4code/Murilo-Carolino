import { deleteUser } from "../../data/deleteUser";
import { getAllUsers } from "../../data/getAllUsers";
import { insertUser } from "../../data/insertUser";
import { selectUserByEmail } from "../../data/selectUserByEmail";
import { generateToken, getTokenData } from "../../services/authenticator";
import { compare, hash } from "../../services/hashManager";
import { generateId } from "../../services/idGenerator";
import { login, user } from "../../types/user";


export class UserBusiness {

    signupBusiness = async (user: any): Promise<string> => {

        if (
            !user.name ||
            !user.email ||
            !user.password ||
            !user.role
        ) {
            throw new Error('Preencha os campos "name","nickname", "email" e "password"')
        }

        const id: string = generateId()

        const cypherPassword = await hash(user.password);

        await insertUser({
            id,
            name: user.name,
            email: user.email,
            password: cypherPassword,
            role: user.role
        })

        const token: string = generateToken({
            id,
            role: user.role
        })

        return token
    }

    loginBusiness = async (login: login): Promise<string> => {

        if (!login.email || !login.password) {
            throw new Error("'email' e 'senha' são obrigatórios")
        }

        const user: user = await selectUserByEmail(login.email)

        if (!user) {
            throw new Error("Usuário não encontrado ou senha incorreta")
        }

        const passwordIsCorrect: boolean = await compare(login.password, user.password)

        if (!passwordIsCorrect) {
            throw new Error("Usuário não encontrado ou senha incorreta")
        }

        const token: string = generateToken({
            id: user.id,
            role: user.role
        })

        return token
    }

    getAllUsersBusiness = async (token: string): Promise<user> => {

        const tokenData = getTokenData(token)

        if (!tokenData) {
            throw new Error("Token inválido ou não passado no headers")
        }

        const users: user = await getAllUsers()

        return users
    }

    deleteUserBusiness = async (id: string, token: string) => {

        const verifiedToken = getTokenData(token)

        if (verifiedToken.role !== "ADMIN") {
            throw new Error("Apenas administradores podem deletar usuários!")
        }

        return await deleteUser(id)
    }
}