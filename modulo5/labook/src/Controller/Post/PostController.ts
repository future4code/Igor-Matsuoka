import { Request, Response } from "express"
import PostBusiness from "../../Business/Post/PostBusiness"
import PostData from "../../Data/Post/PostData"
import { createPostInputDTO } from "../../Model/Post"

export default class UserController {
    private postBusiness: PostBusiness
    constructor (
    ){
        this.postBusiness = new PostBusiness(new PostData())
    }

    create = async (req: Request, res: Response) => {
        const token = req.headers.authorization

        const { photo, description, type } = req.body

        const input: createPostInputDTO = {
            photo,
            description,
            type
        }

        try {
            const post = await this.postBusiness.create(token, input)
            res.send({message: "Post criado com sucesso!", post})

        } catch (error:any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }
    }
}