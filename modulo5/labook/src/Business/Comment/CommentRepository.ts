import { Comment } from "../../Model/Comment"

export interface CommentRepository{
    insert(comment: Comment):Promise<Comment>
    // findById(id: string, id2: string):Promise<Comment | null>
    // delete(id: string, id2: string):Promise<void>
}