import { post } from "../model/Post";
import { BaseDatabase } from "./BaseDataBase";

export class PostDatabase extends BaseDatabase {

    getPostById = async (id: string): Promise<post | undefined> => {

        const result = await this.connection("")
            .where({id})

        return result[0]  
    }
}