import { UserDatabase } from "../data/UserDatabase";
import { InvalidInputError } from "../error/InvalidInputError";
import { UserInputDTO, UserInsertDTO } from "../model/User";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness {

    constructor (
        private IdGenerator: IdGenerator,
        private UserDatabase: UserDatabase
    ) {}

    async createUser(input: UserInputDTO) {
        
        if(!input.name || !input.lastName || !input.participation) {
            throw new InvalidInputError("Invalid input to create user")
        }
        
        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        const newUser: UserInsertDTO = {
            id: id,
            name: input.name,
            lastName: input.lastName,
            participation: input.participation
        }

        const userDatabase = new UserDatabase()
        await userDatabase.createUser(newUser)
        
    }

    async getAllUsers() {

        const userDatabase = new UserDatabase()
        const allUsers = await userDatabase.getAllUsers()

        return allUsers

    }
}