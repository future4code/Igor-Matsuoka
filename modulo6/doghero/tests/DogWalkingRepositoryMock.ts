import { Walk } from "../src/Model/Walk"

export interface DogWalkingRepositoryMock {
    insert(walk: Walk):Promise<Walk>
    start_walk(walk:Walk): Promise<void>
    finish_walk(walk:Walk): Promise<void>
    getWalkById(id:string):Promise<void | any>
    getAllWalks(): Promise<any>
    getAllWalksPaged(page: number, walksPerPage:number):Promise<any>
}