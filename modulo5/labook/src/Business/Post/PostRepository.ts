import { Post } from "../../Model/Post";

export interface PostRepository{
    insert(post: Post):Promise<Post>
    findById(id: string):Promise<Post | null>
    getPosts(id:string):Promise<Post | null>
}