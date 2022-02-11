import { Request, Response } from "express"
import { connection } from "../data/connection"

async function sortUsersByType(type:string):Promise<any> {
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio WHERE type like '${type}' ORDER BY name ASC
   `)

   return result[0]
}

async function sortUsersByName(name:string):Promise<any> {
   const result = await connection.raw(`
   SELECT id, name, email, type
      FROM aula48_exercicio WHERE name like '${name}' ORDER BY name ASC
   `)

   return result[0]
}

async function sortUsersByEmail():Promise<any> {
   const result = await connection.raw(`
   SELECT id, name, email, type
   FROM aula48_exercicio ORDER BY email ASC;
   `)

   return result[0]
}


export const sortUsers = async(req: Request,res: Response): Promise<void> =>{
   try {
      const type = req.query.type as string
      const name = req.query.name as string

      const typeSort = await sortUsersByType(type)
      const nameSort = await sortUsersByName(name)
      const emailSort = await sortUsersByEmail()

      if(type && !name){
         res.status(200).send(typeSort)
      } else if (!type && name){
         res.status(200).send(nameSort)
      } else if (!type && !name){
         res.status(200).send(emailSort)
      }

      if(!typeSort.length){
         res.statusCode = 404
         throw new Error("No type found!")
      }

      if(!nameSort.length){
         res.statusCode = 404
         throw new Error("No name found!")
      }

      if(!emailSort.length){
         res.statusCode = 404
         throw new Error("No email found!")
      }

   } catch (error) {
      if(error instanceof Error){
         res.send(error.message)
      }
   }
}
