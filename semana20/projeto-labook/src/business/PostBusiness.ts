import { PostDatabase } from "../data/PostDatabase"
import { post } from "../model/Post"

export class PostBusiness {

    getPostById = async (id: string): Promise<post | undefined> => {

        const post = await new PostDatabase().getPostById(id)

        return post
    }
}