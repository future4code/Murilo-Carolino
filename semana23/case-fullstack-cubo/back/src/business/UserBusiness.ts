import { UserDatabase } from "../data/UserDatabase";
import { InvalidInputError } from "../error/InvalidInputError";
import { UserInputDTO, UserInsertDTO } from "../model/User";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness {

    constructor (
        private idGenerator: IdGenerator,
        private userDatabase: UserDatabase
    ) {}

    async createUser(input: UserInputDTO) {
        
        if(!input.name || !input.lastName || !input.participation) {
            throw new InvalidInputError("Invalid input to create user")
        }
        
        
        const id = this.idGenerator.generate()

        const newUser: UserInsertDTO = {
            id: id,
            name: input.name,
            lastName: input.lastName,
            participation: input.participation
        }

        await this.userDatabase.createUser(newUser)
        
    }

    async getAllUsers() {

        const allUsers = await this.userDatabase.getAllUsers()
        
        return allUsers

    }
}