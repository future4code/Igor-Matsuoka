import { Request, Response } from "express";
import { getUserByEmail } from "../services/getUserByEmail";
import { generateToken } from "../services/generateToken";
import { HashManager } from "../services/hashManager";

export const loginUser = async (req: Request, res: Response):Promise<void> => {
    try {
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
        throw new Error("Invalid email");
      }

      const userData = {
        email: req.body.email,
        password: req.body.password,
      };

      const user = await getUserByEmail(userData.email);

      const compareResult = new HashManager().compareHash(
        userData.password,
        user.password
      );

      if (!compareResult) {
        throw new Error("Invalid password");
      }

      const token = generateToken({
        id: user.id,
        role: user.role
      });

      res.status(200).send({
        token,
      });

    } catch (error:any) {
        res.send({error, message:error.message})
    }
}