import { Request, Response } from "express";
import { signupBusiness } from "../../business/user/signupBusiness";
import { signupInputDTO } from "../../model/user";

export const signup = async (
   req: Request,
   res: Response
) => {
   try {
      const input:signupInputDTO = {
          name: req.body.name, 
          nickname: req.body.nickname, 
          email: req.body.email, 
          password: req.body.password, 
          role: req.body.role 
      }

      const token = await signupBusiness(input)

      res
         .status(201)
         .send({
            message: "Usuário criado!",
            token
         })

   } catch (error:any) {
      res.status(400).send(error.message)
   }
}