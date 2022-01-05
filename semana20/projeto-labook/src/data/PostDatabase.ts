import { Post } from "../model/Post";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {

    getPostById = async (id: string): Promise<Post | undefined> => {

        const result = await this.connection("")
            .where({id})

        return result[0]  
    }
}