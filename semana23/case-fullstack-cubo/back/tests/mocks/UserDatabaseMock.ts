
import { User, UserInsertDTO } from "../../src/model/User";
import { userMock1, userMock2 } from "./userMock";

export class UserDatabaseMock {

    async createUser(newUser: UserInsertDTO): Promise<string> {
        return "Usuário criado com sucesso!"
    }

    async getAllUsers(): Promise<User[]> {
        return [userMock1, userMock2]
    }
}