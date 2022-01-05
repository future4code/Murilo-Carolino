import { PostDatabase } from "../data/PostDatabase"
import { Post } from "../model/Post"

export class PostBusiness {

    getPostById = async (id: string): Promise<Post | undefined> => {

        const post = await new PostDatabase().getPostById(id)

        return post
    }
}