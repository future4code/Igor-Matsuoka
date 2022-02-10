import { Request, Response } from "express";
import { connection } from "../../data/connection"
import { Product } from "../../types/types";

export const getProducts = async (req: Request, res: Response):Promise<void> => {
    try {
        const products:Product[] = await connection("labecommerce_products")
        .select()

        res.status(201).send({products: products})
    } catch (error:any) {
        res.send({error, message:error.message})
    }
} 