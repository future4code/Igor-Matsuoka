import { PostRepository } from "../../Business/Post/PostRepository";
import { Post } from "../../Model/Post";
import BaseDatabase from "../BaseDatabase";

export default class PostData extends BaseDatabase implements PostRepository{
    protected TABLE_NAME = "Labook_Posts"

    insert = async (post: Post) => {
        try {
            await BaseDatabase
            .connection(this.TABLE_NAME)
            .insert(post)

            return post
        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    findById = async (id: string) => {
        try {
            const queryResult: Post[] = await BaseDatabase
            .connection(this.TABLE_NAME)
            .select()
            .where({id})

            return queryResult[0] && Post.toUserModel(queryResult[0])
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}