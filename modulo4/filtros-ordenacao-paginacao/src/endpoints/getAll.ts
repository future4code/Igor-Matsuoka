import { Request, Response } from "express"
import { connection } from "../data/connection"

async function selectAllUsers():Promise<any> {
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio
      ORDER BY name DESC
   `)

   return result[0]
}

async function selectUserByName(name:string):Promise<any> {
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio WHERE name like '%${name}%'
      ORDER BY name DESC
   `)

   return result[0]
}

async function selectUsersByType(type:string):Promise<any> {
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio WHERE type like '%${type}%'
      ORDER BY name DESC
   `)

   return result[0]
}

async function selectUsersByTypeAndName(type:string, name:string):Promise<any> {
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio
      WHERE type like '%${type}%'
      AND name like '%${name}%'
      ORDER BY name DESC
   `)

   return result[0]
}

export const getAll = async(req: Request,res: Response): Promise<void> =>{
   try {
     
      const name = req.query.name as string
      const type = req.query.type as string
      let page = Number(req.query.page)

      const userByType = await selectUsersByType(type)
      const userByName = await selectUserByName(name)
      const allUsers = await selectAllUsers()
      const userByTypeAndName = await selectUsersByTypeAndName(type, name)

      if(type){
         page = 1
         res.status(200).send(userByType)
         if(!userByType.length){
            res.statusCode = 404
            throw new Error("No users found")
         }
      } else if (name){
         page = 1
         res.status(200).send(userByName)
         if(!userByName.length){
            res.statusCode = 404
            throw new Error("No users found")
         }
      } else if (!type && !name){
         page = 1
         res.status(200).send(allUsers)
         if(!allUsers.length){
            res.statusCode = 404
            throw new Error("No users found")
         }
      } else if (type && name && !page){
         page = 1
         res.status(200).send(userByTypeAndName)
         if(!userByTypeAndName.length){
            res.statusCode = 404
            throw new Error("No users found")
         }
      }
      
      if(page < 1 || isNaN(page)){
         page = 1
      }

      let size = 5
      let offset = size * (page - 1)
   
      const result = await connection("aula48_exercicio")
      .limit(size)
      .offset(offset)
   
      if(!result.length){
         res.statusCode = 404
         throw new Error("No users found")
      }
      res.status(200).send(result)
    
   } catch (error) {
      if(error instanceof Error){
         res.send(error.message)
      }
   }
}