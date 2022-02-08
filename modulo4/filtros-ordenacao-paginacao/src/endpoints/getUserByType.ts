import { Request, Response } from "express"
import { connection } from "../data/connection"

export default async function selectUsersByType(type:string):Promise<any> {
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio WHERE type like '%${type}%'
   `)

   return result[0]
}

export const getUsersByType = async(req: Request,res: Response): Promise<void> =>{
   try {
      const type = req.query.type as string

      const user = await selectUsersByType(type)

      if(!user.length){
         res.statusCode = 404
         throw new Error("No type found!")
      }

      res.status(200).send(user)
      
   } catch (error) {
      if(error instanceof Error){
         res.send(error.message)
      }
   }
}
