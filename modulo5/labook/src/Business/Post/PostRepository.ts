import { Post } from "../../Model/Post";

export interface PostRepository{
    insert(post: Post):Promise<Post>
}