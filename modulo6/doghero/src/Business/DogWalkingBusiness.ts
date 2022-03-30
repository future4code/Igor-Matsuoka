import { CreateWalkInputDTO, DURACAO, FinishWalkInputDTO, StartWalkInputDTO, Walk } from "../Model/Walk";
import { CalculatePrice } from "../Services/calculatePrice";
import { FormataHoras } from "../Services/formatHours";
import { IdGenerator } from "../Utilities/idGenerator";
import { dogWalkingRepository } from "./DogWalkingRepository";

export default class DogWalkingBusiness {
    private idGenerator: IdGenerator;
    private dogWalkingData: dogWalkingRepository
    private calculatePrice: CalculatePrice
    private formatHours: FormataHoras

    constructor(
        dogWalkingDataImplementation: dogWalkingRepository
    ){
        this.dogWalkingData = dogWalkingDataImplementation
        this.idGenerator = new IdGenerator()
        this.calculatePrice = new CalculatePrice()
        this.formatHours = new FormataHoras()
    }

    create = async(input: CreateWalkInputDTO) => {
        const {
            data_de_agendamento,  
            duracao,
            latitude,
            longitude,
            pets,
            horario_inicio,
            horario_termino
        } = input

        if(!data_de_agendamento || !duracao || !latitude || !longitude || !pets || !horario_inicio || !horario_termino){
            throw new Error("Insira todos os campos!")
        }

        if(duracao !== DURACAO.HORA && duracao !== DURACAO.MEIAHORA){
            throw new Error("Esse tempo de duração é inválido!")
        }

        if(horario_inicio === horario_termino){
            throw new Error("O horário de início não pode ser igual ao de término")
        }
        
        const horaInicio = this.formatHours.FormataStringHora(horario_inicio)
        const horaInicioFormatada = this.formatHours.formatar_segundos(Number(horaInicio[0]), Number(horaInicio[1]), Number(horaInicio[2]))
        const horaTermino = this.formatHours.FormataStringHora(horario_termino)
        const horaTerminoFormatada = this.formatHours.formatar_segundos(Number(horaTermino[0]), Number(horaTermino[1]), Number(horaTermino[2]))

        if(horaInicioFormatada > horaTerminoFormatada){
            throw new Error("O horário de início não pode ser maior que o horário de término")
        }

        if(horario_termino.length !== 8 || horario_inicio.length !== 8){
            throw new Error("Insira um horário válido")
        }

        const id:string = this.idGenerator.generate()

        const preco = this.calculatePrice.calculatePrice(pets, duracao)

        const walk = new Walk(
            id,
            data_de_agendamento,
            preco as number,
            duracao,
            latitude,
            longitude,
            pets,
            horario_inicio,
            horario_termino
        )

        await this.dogWalkingData.insert(walk)
    }

    startWalk =async (input:StartWalkInputDTO ) => {
        const {id, horario_inicio} = input
        
        if(!id || !horario_inicio){
            throw new Error("Insira todos os campos!")
        }

        if(horario_inicio.length !== 8){
            throw new Error("Insira um horário válido")
        }

        const horaInicio = this.formatHours.FormataStringHora(horario_inicio)
        const horaInicioFormatada = this.formatHours.formatar_segundos(Number(horaInicio[0]), Number(horaInicio[1]), Number(horaInicio[2]))
        const horaTermino = getHorarioTermino()
        const horaTerminoFormatada = this.formatHours.formatar_segundos(Number(horaTermino[0]), Number(horaTermino[1]), Number(horaTermino[2]))
       
        if(horaInicioFormatada > horaTerminoFormatada){
            throw new Error("O horário de início não pode ser maior que o horário de término")
        }

        const walkId = await this.dogWalkingData.getWalkById(id)
        
        if(!walkId){
            throw new Error("Esse passeio não existe!")
        }

        if(walkId){
            await this.dogWalkingData.start_walk(horario_inicio, id)
        }
    }

    finishWalk = async (input:FinishWalkInputDTO ) => {
        const {id, horario_termino} = input
        
        if(!id || !horario_termino){
            throw new Error("Insira todos os campos!")
        }

        if(horario_termino.length !== 8){
            throw new Error("Insira um horário válido")
        }

        const walkId = await this.dogWalkingData.getWalkById(id)


        if(!walkId){
            throw new Error("Esse passeio não existe!")
        }

        if(walkId){
            await this.dogWalkingData.finish_walk(horario_termino, id)
        }
    }
}