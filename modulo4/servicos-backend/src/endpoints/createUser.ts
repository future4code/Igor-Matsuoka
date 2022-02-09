import { Request, Response } from "express"
import { connection } from "../data/connection"
import { getAdress } from "../services/getAdress"


export const createUser = async (req: Request, res: Response) => {
    try {
        const {cep, numero, complemento} = req.body
        
        const address = await getAdress(cep)

        await connection("UsersAddress")
        .insert({
            cep,
            logradouro: address?.logradouro,
            numero,
            complemento,
            bairro: address?.bairro,
            cidade: address?.localidade,
            uf: address?.uf
        })

        if(!address){
            throw new Error("ERRO!")
        }

        res.status(201).send({message: "Endereço criado!"})
    } catch (error:any) {
        res.send({error, message:error.message})
    }
}