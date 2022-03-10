import { createPostInputDTO, Post } from "../../Model/Post";
import { Authenticator } from "../../Utilities/authenticator";
import { IdGenerator } from "../../Utilities/idGenerator";
import { PostRepository } from "./PostRepository";


export default class PostBusiness {
    private idGenerator: IdGenerator;
    private authenticator: Authenticator;
    private postData: PostRepository;

    constructor(
        postDataImplementation: PostRepository
    ){
        this.postData = postDataImplementation
        this.idGenerator = new IdGenerator()
        this.authenticator = new Authenticator()
    }

    create = async (inputHeaders:string | undefined, input: createPostInputDTO) => {
        const token = inputHeaders
        const {photo, description, type} = input

        if(!photo || !description || !type){
            throw new Error("Insira todos os campos!")
        }

        if(!token || token === undefined){
            throw new Error("É necessário uma autorização!")
        }

        if(type !== "normal" && type !== "event"){
            throw new Error("O tipo de evento não é válido!")
        }

        const authenticator = await this.authenticator.getTokenData(token)

        const id:string = this.idGenerator.generate()
        const created_at = new Date()
        const author_id = authenticator.id

        const post = new Post(
            id,
            photo,
            description,
            type,
            created_at,
            author_id
        )

        const result = await this.postData.insert(post)

        return result
    }

    find = async (inputHeaders:string | undefined, input: string) => {
        const token = inputHeaders
        const inputParams = input

        if(!inputParams){
            throw new Error("Insira um ID!")
        }

        if(!token || token === undefined){
            throw new Error("É necessário uma autorização!")
        }

        await this.authenticator.getTokenData(token)

        const result = await this.postData.findById(inputParams)

        if(!result){
            throw new Error("Não existe um post com esse id")
        }

        return result
    }
}