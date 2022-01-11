export enum POST_TYPES {
    NORMAL = "NORMAL",
    EVENTO = "EVENTO"
}

export interface Post {
    id: string
    foto: string
    descricao: string
    dataCriacao: Date
    tipo: POST_TYPES
    userId: string
}

export interface Like {
    userId: string
    postId: String
}