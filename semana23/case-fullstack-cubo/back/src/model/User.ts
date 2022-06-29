export class User {

    constructor (
        private id: string,
        private name: string,
        private lastName: string,
        private participation: number
    ) {}

    static toUserModel(user: any): User {
        return new User(
            user.id,
            user.name,
            user.lastName,
            user.participation
        )
    }
}

export interface UserInputDTO {
    name: string;
    lastName: string;
    participation: number;
}

export interface UserInsertDTO extends UserInputDTO {
    id: string
}