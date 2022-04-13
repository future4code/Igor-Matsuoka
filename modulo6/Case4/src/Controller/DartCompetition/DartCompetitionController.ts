import { Request, Response } from "express";
import DartCompetitionBusiness from "../../Business/DartCompetition/DartCompetitionBusiness";
import DartCompetitionData from "../../Data/DartCompetition/DartCompetitionData";

export default class RunCompetitionController {
    private runCompetitionBusiness: DartCompetitionBusiness;
    constructor(
    ){
        this.runCompetitionBusiness = new DartCompetitionBusiness(new DartCompetitionData())
    }

    createDart = async (req: Request, res: Response) => {
       
    }

    finishDart = async (req: Request, res: Response) => {
    
    }

    rankingDart = async (req: Request, res: Response) => {
    
    }

}