import { Competition } from "../../Model/Competition";

export interface RunCompetitionRepository {
    insert(competition: Competition):Promise<Competition>
    getByAtleta(atleta: string):Promise<Competition>
}