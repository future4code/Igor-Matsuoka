import { createCommentInputDTO } from "../../Model/Comment";
import { Authenticator } from "../../Utilities/authenticator";
import { IdGenerator } from "../../Utilities/idGenerator";
import { CommentRepository } from "./CommentRepository";
import { Comment } from "../../Model/Comment";

export default class LikeBusiness {
    private idGenerator: IdGenerator;
    private authenticator: Authenticator;
    private commentData: CommentRepository;

    constructor(
        commentDataImplementation: CommentRepository
    ){
        this.commentData = commentDataImplementation
        this.idGenerator = new IdGenerator()
        this.authenticator = new Authenticator()
    }

    create = async (inputHeaders: string| undefined, input: createCommentInputDTO) => {
        const token = inputHeaders
        const { post_id, description } = input

        if(!token || token === undefined){
            throw new Error("É necessário uma autorização!")
        }

        if(!post_id || !description){
            throw new Error("Insira todos os campos!")
        }

        await this.authenticator.getTokenData(token)
        const id: string = this.idGenerator.generate()

        const comment = new Comment(
            id,
            post_id,
            description
        )

        const result = await this.commentData.insert(comment)

        return result
    }

    // delete = async (inputHeaders: string| undefined, input: string) => {
    //     const token = inputHeaders
    //     const postId  = input

    //     if(!postId){
    //         throw new Error("Insira todos os campos!")
    //     }

    //     if(!token || token === undefined){
    //         throw new Error("É necessário uma autorização!")
    //     }

    //     const authenticator = await this.authenticator.getTokenData(token)
    //     const user_id = authenticator.id

    //     const searchRelation = await this.likeData.findById(user_id, postId)

    //     if(searchRelation){
    //         await this.likeData.delete(user_id, input)
    //     }

    //     if(!searchRelation){
    //         throw new Error("Você ainda não curtiu esse post!")
    //     }
    // }
}