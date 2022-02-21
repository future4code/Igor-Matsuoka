import { Request, Response } from "express";
import { getData } from "../services/identifyUser";
import { getUserById } from "../services/getUserById";

export const getUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const token = req.headers.authorization as string;

        const authenticationData = getData(token);

        const user = await getUserById(authenticationData.id);

        res.status(200).send({
            id: user.id,
            email: user.email,
        });

    } catch (error: any) {
        res.send({ error, message: error.message })
    }
}