import { UserBusiness } from "../business/UserBusiness";
import { Request, Response } from "express";

export class UserController {
    async signup(req: Request, res: Response) {
        try {
            const input = {
                email: req.body.email,
                name: req.body.name,
                password: req.body.password,
                role: req.body.role
            }
            
            const userBusiness = new UserBusiness()
            const token = await userBusiness.createUser(input);
    
            res.status(200).send({ token });
    
        } catch (error:any) {
            res.status(400).send({ error: error.message });
        }
    }

    async login(req: Request, res: Response) {
        try {
            const loginData = {
                email: req.body.email,
                password: req.body.password
            };

            const userBusiness = new UserBusiness()
            const token = await userBusiness.getUserByEmail(loginData);

            res.status(200).send({ token });

        } catch (error:any) {
            res.status(400).send({ error: error.message });
        }
    }
}