import RunCompetitionBusiness from "../../Business/RunCompetition/RunCompetitionBusiness";
import RunCompetitionData from "../../Data/RunCompetitionData/RunCompetitionData";
import { Request, Response } from "express";
import { InputDTO } from "../../Model/Competition";

export default class RunCompetitionController {
    private runCompetitionBusiness: RunCompetitionBusiness;
    constructor(
    ){
        this.runCompetitionBusiness = new RunCompetitionBusiness(new RunCompetitionData())
    }

    createRun = async (req: Request, res: Response) => {
        const {competicao, atleta, value, unidade} = req.body

        const input: InputDTO = {
            competicao,
            atleta,
            value,
            unidade
        }
    
        try {
            await this.runCompetitionBusiness.insertRun(input)
            res.send({message: "Atleta inserido na competição!"})

        } catch (error:any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }
    }

}