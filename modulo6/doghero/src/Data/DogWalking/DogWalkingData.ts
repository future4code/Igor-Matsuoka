import { Walk } from "../../Model/Walk";
import BaseDatabase from "../BaseDatabase";

export default class DogWalkingData extends BaseDatabase {
    protected TABLE_NAME = "Dog_Walking"

    insert = async(walk: Walk) => {
        try {
            await BaseDatabase
            .connection(this.TABLE_NAME)
            .insert(walk)

            return walk
        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    // index = async(status: string) => {
    //     try {
    //        const queryResult: Walk[] = await BaseDatabase
    //         .connection(this.TABLE_NAME)
    //         .select()
    //         .where({status: "NÃO REALIZADO"})
    //         return queryResult[0]

    //     } catch (error:any) {
    //         throw new Error(error.message)   
    //     }
    // }

    start_walk = async (start_walk:string, id: string): Promise<undefined>  => {
        try {
            const result = await BaseDatabase.connection.raw(`
                UPDATE ${this.TABLE_NAME} SET horario_inicio = '${start_walk}', status = "EM ANDAMENTO" WHERE id = '${id}'
            `
            );
            
            return result[0]
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    finish_walk = async (finish_walk:string, id: string): Promise<undefined> => {
        try {
            const result = await BaseDatabase.connection.raw(`
                UPDATE ${this.TABLE_NAME} SET horario_termino = '${finish_walk}', status = "FINALIZADO" WHERE id = '${id}'
            `
            );
            return result[0]
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    getWalkById = async (id: string): Promise<void|any> => {
        try {
            const queryResult:Walk[] = await BaseDatabase.connection.raw(`
                Select * FROM ${this.TABLE_NAME} WHERE id = '${id}'
                `
            );

            return queryResult[0]
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}