import { Request, Response } from "express"
import RelationBusiness from "../../Business/Relations/RelationBusiness"
import RelationsData from "../../Data/Relations/RelationsData"
import { createRelationInputDTO } from "../../Model/Relation"

export default class RelationController {
    private relationBusiness: RelationBusiness
    constructor(
    ){
        this.relationBusiness = new RelationBusiness(new RelationsData())
    }

    create = async (req: Request, res: Response) => {
        const token = req.headers.authorization
        const { id } = req.body
        
        const input: createRelationInputDTO = {
            userId: id
        }

        try {
            const relation = await this.relationBusiness.create(token, input)
            res.send({message: "VIVA! Você acabou de fazer uma amizade!"})

        } catch (error:any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }
    }

}