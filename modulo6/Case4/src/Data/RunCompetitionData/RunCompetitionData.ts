import { RunCompetitionRepository } from "../../Business/RunCompetition/RunCompetitionRepository";
import { Competition } from "../../Model/Competition";
import BaseDatabase from "../BaseDatabase";

export default class RunData extends BaseDatabase implements RunCompetitionRepository {
    protected TABLE_NAME = "Run_competition"

    insert = async (competition: Competition) => {
        try {
            await BaseDatabase
            .connection(this.TABLE_NAME)
            .insert(competition)
            
            return competition 
        } catch (error:any) {
            throw new Error("Erro ao criar usuário no banco de dados!")
        }
    }

    getByAtleta = async (atleta: string) => {
        try {
            const result = await BaseDatabase
            .connection(this.TABLE_NAME)
            .select()
            .where("atleta", atleta)
            
            return result[0]
        } catch (error:any) {
            throw new Error("Erro ao buscar usuário pelo nome no banco de dados!")
        }
    }
}