import { InputDTO } from "../../Model/Competition";
import { IdGenerator } from "../../Services/IdGenerator";
import { DartCompetitionRepository } from "./DartCompetitionRepository";

export default class RunCompetitionBusiness {
    private idGenerator: IdGenerator;
    private competitionData: DartCompetitionRepository;

    constructor(
        competitionDataImplementation: DartCompetitionRepository
    ){  
        this.idGenerator = new IdGenerator
        this.competitionData = competitionDataImplementation
    }

    insertDart = async(input: InputDTO):Promise<void> => {
    
    }

    finishDart = async(input: string) => {
    
    }

    getRanking = async(input: string) => {
        
    }
}