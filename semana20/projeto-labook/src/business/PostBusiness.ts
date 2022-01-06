import { PostDatabase } from "../data/PostDatabase"
import { Post, POST_TYPES } from "../model/Post"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export class PostBusiness {

    createPost = async (foto: string, descricao: string, tipo: POST_TYPES, token: string) => {

        const id: string = new IdGenerator().generate()
        const creationData = new Date()

        const tokenData = new Authenticator().getTokenData(token)

        if (!tokenData) {
            throw new Error("token inválido.")
        }

        const newPost: Post = {
            id: id,
            foto: foto,
            descricao: descricao,
            tipo: tipo,
            dataCriacao: creationData,
            userId: tokenData.id,
        }

        const post = await new PostDatabase().createPost(newPost)
    }

    getPostById = async (id: string): Promise<Post | undefined> => {

        const post = await new PostDatabase().getPostById(id)

        return post
    }
}