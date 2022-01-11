import { Like, Post } from "../model/Post";
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

    likePost = async (newLike: Like) => {

        await this.connection("labook_likes")
            .insert(newLike)
    }

    unlikePost = async (unlike: Like) => {

        await this.connection("labook_likes")
            .delete()
            .where(unlike)
    }
}