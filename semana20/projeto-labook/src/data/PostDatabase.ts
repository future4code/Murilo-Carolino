import { Post } from "../model/Post";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {

    createPost = async (newPost: Post) => {

        const result = await this.connection("labook_posts")
            .insert(newPost)

    }

    getPostById = async (id: string): Promise<Post | undefined> => {

        const result = await this.connection("labook_posts")
            .where({id})

        return result[0]  
    }
}