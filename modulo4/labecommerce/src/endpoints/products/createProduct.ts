import { Request, Response } from "express";
import { connection } from "../../data/connection"

export const createProduct = async (req: Request, res: Response):Promise<void> => {
    try {
        let errorCode = 400
        const {name, price, image_url} = req.body

        if(!name || !price || !image_url){
            errorCode = 422
            throw new Error("Parameter is missing")
        } else {
            await connection("labecommerce_products")
            .insert({
            id: Date.now().toString(),
            name,
            price,
            image_url
            })
        }

        res.status(201).send({message: "Produto cadastrado com sucesso!"})
    } catch (error:any) {
        res.send({error, message:error.message})
    }
} 
