export enum POST_TYPES {
    NORMAL = "NORMAL",
    EVENT = "EVENT"
}

export interface post {
    userId: string
    id: string
    photo: string
    description: string
    creationDate: Date
    type: POST_TYPES
}