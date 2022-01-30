import { User, UserInsertDTO } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

    async createUser(newUser: UserInsertDTO): Promise<void> {
        try {

            await this.getConnection()
            .insert({
                id: newUser.id,
                name: newUser.name,
                lastName: newUser.lastName,
                participation: newUser.participation
            })
            .into(this.tableName.users)

        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Erro no banco de dados!")
            }
        }

    }

    async getAllUsers(): Promise<User[]> {
        try {

            const users = await this.getConnection()
            .select("*")
            .from(this.tableName.users)

            const allUsers = users.map((user) => {
                return User.toUserModel(user)
            })
            
            return allUsers

        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Erro no banco de dados!")
            }
        }

    }
}