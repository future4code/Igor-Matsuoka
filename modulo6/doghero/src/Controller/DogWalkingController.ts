import { Request, Response } from "express"
import DogWalkingBusiness from "../Business/DogWalkingBusiness";
import DogWalkingData from "../Data/DogWalking/DogWalkingData";
import { CreateWalkInputDTO, FinishWalkInputDTO, StartWalkInputDTO } from "../Model/Walk";

export default class DogWalkingController {
    private dogWalkingBusiness: DogWalkingBusiness
    constructor(

    ){
        this.dogWalkingBusiness = new DogWalkingBusiness(new DogWalkingData())
    }

    create = async (req: Request, res: Response) => {
        const {
            data_de_agendamento,  
            duracao, 
            latitude, 
            longitude, 
            pets, 
            horario_inicio,
            horario_termino
        } = req.body

        const input: CreateWalkInputDTO = {
            data_de_agendamento, 
            duracao, 
            latitude, 
            longitude, 
            pets, 
            horario_inicio,
            horario_termino
        }

        try {
            const walk = await this.dogWalkingBusiness.create(input)
            res.send({message: "Caminhada registrada com sucesso!", walk})
        } catch (error:any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }
    }

    start =async (req: Request, res: Response) => {
        const {id, horario_inicio} = req.body

        const input: StartWalkInputDTO = {
            id,
            horario_inicio
        }

        try {
            const walk = await this.dogWalkingBusiness.startWalk(input)
            res.send({message: "Caminhada iniciada!", walk})
        } catch (error:any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }
    }

    finish =async (req: Request, res: Response) => {
        const {id, horario_termino} = req.body

        const input: FinishWalkInputDTO = {
            id,
            horario_termino
        }

        try {
            const walk = await this.dogWalkingBusiness.finishWalk(input)
            res.send({message: "Caminhada Finalizada!", walk})
        } catch (error:any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }
    }
}