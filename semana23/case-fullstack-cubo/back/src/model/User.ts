export interface UserInputDTO {
    name: string;
    lastName: string;
    participation: number;
}

export interface UserInsertDTO extends UserInputDTO {
    id: string
}