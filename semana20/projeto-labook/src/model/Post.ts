export enum POST_TYPES {
    NORMAL = "NORMAL",
    EVENT = "EVENT"
}

export interface Post {
    userId: string
    id: string
    photo: string
    description: string
    creationDate: Date
    type: POST_TYPES
}