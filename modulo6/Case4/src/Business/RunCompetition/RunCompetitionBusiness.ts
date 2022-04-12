import { Competition, InputDTO, SITUACAO } from "../../Model/Competition";
import { IdGenerator } from "../../Services/IdGenerator";
import { RunCompetitionRepository } from "./RunCompetitionRepository";

export default class RunCompetitionBusiness {
    private idGenerator: IdGenerator;
    private competitionData: RunCompetitionRepository;

    constructor(
        competitionDataImplementation: RunCompetitionRepository
    ){  
        this.idGenerator = new IdGenerator
        this.competitionData = competitionDataImplementation
    }

    insertRun = async(input: InputDTO):Promise<void> => {
        const {competicao, atleta, value, unidade} = input
        
        if(!competicao || !atleta || !value || !unidade){
            throw new Error("Insira todos os campos!")
        }

        if(typeof competicao !== "string" || typeof atleta !== "string" || typeof value !== "string" || typeof unidade !== "string"){
            throw new Error("Insira valores válidos!")
        }

        // const verificaCompetidor = await this.competitionData.getByAtleta(atleta)

        // console.log(verificaCompetidor)

        // if(verificaCompetidor){
        //     throw new Error("Esse atleta já terminou a prova!")
        // }

        // if(!verificaCompetidor){
            const id = this.idGenerator.generate()

            const situacao = SITUACAO.ANDAMENTO

            const novaCompeticao = new Competition(
                id,
                competicao,
                atleta,
                value,
                unidade,
                situacao
            )

            await this.competitionData.insert(novaCompeticao)
        // }
    }
}