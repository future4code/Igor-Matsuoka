import { Walk } from "../src/Model/Walk"
import { DogWalkingRepositoryMock } from "./DogWalkingRepositoryMock"
import { walkMock } from "./WalkMock"



export default class DogWalkingDataMock implements DogWalkingRepositoryMock{
    protected TABLE_NAME = "Dog_Walking"

    insert = async(walk: Walk): Promise<Walk> => {
        return walk
    }
    
    start_walk = async (walk: Walk): Promise<void>  => {}

    finish_walk = async (walk: Walk): Promise<void> => {}

    getWalkById = async (id: string): Promise<void|any> => {}

    getAllWalks = async (): Promise<any> => {
        return walkMock
    }

    getAllWalksPaged = async (): Promise<any> => {
        return walkMock
    }

}