import { Walk } from "../Model/Walk";

export interface dogWalkingRepository {
    insert(walk: Walk):Promise<Walk>
    start_walk(start_walk: string, id: string): Promise<void>
    finish_walk(finish_walk: string, id: string): Promise<void>
    getWalkById(id:string):Promise<Walk>
}