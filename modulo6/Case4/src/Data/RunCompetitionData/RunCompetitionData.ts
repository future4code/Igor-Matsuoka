import { RunCompetitionRepository } from "../../Business/RunCompetition/RunCompetitionRepository";
import { Competition, SITUACAO } from "../../Model/Competition";
import BaseDatabase from "../BaseDatabase";

export default class RunCompetitionData extends BaseDatabase implements RunCompetitionRepository {
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
            const result = await BaseDatabase.connection.raw(`
                SELECT * FROM Run_competition WHERE atleta = '${atleta}';
            `)
            
            return result[0]
        } catch (error:any) {
            throw new Error("Erro ao buscar atleta pelo nome no banco de dados!")
        }
    }

    getCompetitionByName = async (competition: string) => {
        try {
            const result = await BaseDatabase
            .connection(this.TABLE_NAME)
            .select()
            .where("competicao", competition)
            
            return result[0] 
        } catch (error:any) {
            throw new Error("Erro ao buscar competição pelo nome no banco de dados!")
        }
    }

    getCompetitionAndAthlete = async (competition: string) => {
        try {
            const result = await BaseDatabase.connection.raw(`
                SELECT atleta FROM ${this.TABLE_NAME} WHERE competicao = '${competition}';
            `)
            
            return result[0]
        } catch (error:any) {
            throw new Error("Erro ao buscar atleta por competição!")
        }
    }


    getSituationByName = async (competition: string, situation: SITUACAO.FINALIZADO) => {
        try {
            const result = await BaseDatabase.connection.raw(`
                SELECT situacao FROM ${this.TABLE_NAME} WHERE competicao = '${competition}' and situacao = '${situation}';
            `)
            
            return result[0]
        } catch (error:any) {
            throw new Error("Erro ao buscar situação da competição no banco de dados!")
        }
    }

    updateSituation = async (situation: SITUACAO.FINALIZADO, competition: string) => {
        try {
            const result = await BaseDatabase.connection.raw(`
                UPDATE ${this.TABLE_NAME} SET situacao = '${situation}' WHERE competicao = '${competition}';
            `)
        
            return result[0]
        } catch (error:any) {
            throw new Error("Erro ao atualizar competição pelo nome e situação no banco de dados!")
        }
    }

    getRanking = async (competition:string) => {
        try {
            const result = await BaseDatabase.connection.raw(`
                SELECT * FROM ${this.TABLE_NAME} WHERE competicao = '${competition}' ORDER BY valor ASC;
            `)
            
            return result[0]
        } catch (error:any) {
            throw new Error("Erro ao buscar ranking da competição no banco de dados!")
        }
    }

}