import { CommentRepository } from "../../Business/Comment/CommentRepository"
import BaseDatabase from "../BaseDatabase"
import { Comment } from "../../Model/Comment"

export default class CommentData extends BaseDatabase implements CommentRepository {
    protected TABLE_NAME = "Labook_Comments"

    insert = async (comment: Comment) => {
        try {
            await BaseDatabase
            .connection(this.TABLE_NAME)
            .insert(comment)

            return comment
        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    // findById = async (id: string, postId: string) => {
    //     try {
    //         const queryResult: Comment[] = await BaseDatabase
    //         .connection(this.TABLE_NAME)
    //         .select()
    //         .where({user_id: id, post_id: postId})

    //         return queryResult[0] && Like.toUserModel(queryResult[0])
    //     } catch (error:any) {
    //         throw new Error(error.message)
    //     }
    // }

    // delete = async (id: string, postId: string): Promise<void> =>{
    //     try {
    //         await BaseDatabase
    //         .connection(this.TABLE_NAME)
    //         .delete()
    //         .where({user_id: id, post_id: postId})

    //     } catch (error: any) {
    //         throw new Error(error.message)
    //     }
    // }
}