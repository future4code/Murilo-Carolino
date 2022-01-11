import { User, UserCredentials } from "../model/User"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {

    signUp = async (newUser: User): Promise<void> => {

        const result = await this.connection("labook_users")
            .insert(newUser)

    }

    findUserByEmail = async (email: String): Promise<User> => {

        const user = await this.connection("labook_users")
            .select('*')
            .where({email})

        return user[0]
    }
}