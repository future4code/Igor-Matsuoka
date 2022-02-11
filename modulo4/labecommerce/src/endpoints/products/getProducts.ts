import { Request, Response } from "express";
import { connection } from "../../data/connection"
import { Product } from "../../types/types";

async function sortProductsDESC():Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, price, image_url
       FROM labecommerce_products 
       ORDER BY price DESC
    `)
 
    return result[0]
}

async function sortProductsASC():Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, price, image_url
       FROM labecommerce_products 
       ORDER BY price ASC
    `)
 
    return result[0]
}


async function searchProducts(name:string):Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, price, image_url
       FROM labecommerce_products 
       WHERE name like '%${name}%'
    `)
 
    return result[0]
}

export const getProducts = async (req: Request, res: Response):Promise<void> => {
    try {
        let errorCode = 400
        const order = req.query.order
        const search = req.query.search as string

        if (search && !order) {
            const result:Product[] = await searchProducts(search)
            res.send({products: result})

            if(result.length === 0){
                throw new Error("There is no products")
            }
            
        } else if (order && order === "asc" && !search) {
            const result:Product[] = await sortProductsASC()
            res.send({products: result})

            if(result.length === 0){
                throw new Error("There is no products")
            }

        } else if(order && order === "desc" && !search) {
            const result:Product[] = await sortProductsDESC()
            res.send({products: result})

            if(result.length === 0){
                throw new Error("There is no products")
            }

        } else if (!search || !order) {
            const products:Product[] = await connection("labecommerce_products")
            .select()
            res.status(201).send({products: products})

            if(products.length === 0){
                throw new Error("There is no products")
            }

        } else {
            errorCode = 422
            throw new Error("Order needs to be a valid parameter")
        }

    } catch (error:any) {
        res.send({error, message:error.message})
    }
} 