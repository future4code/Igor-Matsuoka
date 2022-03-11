import { createLikeInputDTO, Like } from "../../Model/Like";
import { Authenticator } from "../../Utilities/authenticator";
import { IdGenerator } from "../../Utilities/idGenerator";
import { LikeRepository } from "./LikeRepository";

export default class LikeBusiness {
    private idGenerator: IdGenerator;
    private authenticator: Authenticator;
    private likeData: LikeRepository;

    constructor(
        likeDataImplementation: LikeRepository
    ){
        this.likeData = likeDataImplementation
        this.idGenerator = new IdGenerator()
        this.authenticator = new Authenticator()
    }

    create = async (inputHeaders: string| undefined, input: createLikeInputDTO) => {
        const token = inputHeaders
        const { postId } = input

        if(!token || token === undefined){
            throw new Error("É necessário uma autorização!")
        }

        if(!postId){
            throw new Error("Insira todos os campos!")
        }

        const authenticator = await this.authenticator.getTokenData(token)
        const id: string = this.idGenerator.generate()
        const user_id = authenticator.id

        const like = new Like(
            id,
            user_id,
            postId
        )

        const searchLike = await this.likeData.findById(user_id, postId)
        
        if(searchLike){
            throw new Error("Esse post já possui seu like!")
        }

        const result = await this.likeData.insert(like)

        return result
    }

    // delete = async (inputHeaders: string| undefined, input: string) => {
    //     const token = inputHeaders
    //     const userId  = input

    //     if(!userId){
    //         throw new Error("Insira todos os campos!")
    //     }

    //     if(!token || token === undefined){
    //         throw new Error("É necessário uma autorização!")
    //     }

    //     const authenticator = await this.authenticator.getTokenData(token)
    //     const user1_id = authenticator.id

    //     const searchRelation = await this.relationData.findById(user1_id, userId)
    //     const searchRelation2 = await this.relationData.findById(userId, user1_id)

    //     if(user1_id === userId){
    //         throw new Error("Você não pode desfazer amizade com você mesmo!")
    //     }

    //     if(searchRelation || searchRelation2){
    //         await this.relationData.delete(user1_id, input)
    //         await this.relationData.delete(input, user1_id)
    //     }

    //     if(!searchRelation && !searchRelation2){
    //         throw new Error("Você ainda não possui amizade com essa pessoa!")
    //     }
    // }
}