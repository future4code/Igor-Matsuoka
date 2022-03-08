import { UserBusiness } from "../business/UserBusiness";
import { Request, Response } from "express";

const userBusiness = new UserBusiness()

export class UserController {
    async signup(req: Request, res: Response) {
        try {
            const input = {
                email: req.body.email,
                name: req.body.name,
                password: req.body.password,
                role: req.body.role
            }

            const token = await userBusiness.createUser(input);

            res.status(200).send({ token });

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }

    async login(req: Request, res: Response) {
        try {
            const loginData = {
                email: req.body.email,
                password: req.body.password
            };

            const token = await userBusiness.getUserByEmail(loginData);

            res.status(200).send({ token });

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }

    async get(req: Request, res: Response) {
        try {

            const token = req.headers.authorization!;

            const users = await userBusiness.get(token);

            res.send(users).status(200);

        } catch (error:any) {
            res.send({ message: error.message }).status(error.status);
        }
    }

    async deleteUser(req: Request, res: Response) {
        try {
            const input = {
                id: req.params.id,
				token: req.headers.authorization!
            }

           await userBusiness.deleteUser(input);

            res.status(200).send({ message: "Usuário apagado com sucesso" });

        } catch (error:any) {
            res.status(400).send({ error: error.message });
        }
    }
}