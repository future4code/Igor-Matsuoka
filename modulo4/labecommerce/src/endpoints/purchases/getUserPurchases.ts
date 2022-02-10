import { Request, Response } from "express";
import { FileWatcherEventKind } from "typescript";
import { connection } from "../../data/connection"

export const userPurchases = async (id:string):Promise<any> => {

    const result = await connection.raw(`
        SELECT labecommerce_users.name as purchaser, labecommerce_users.email, labecommerce_products.name, 
        labecommerce_purchases.quantity, labecommerce_purchases.total_price
        FROM labecommerce_purchases
        JOIN labecommerce_users on labecommerce_users.id = ${id}
        JOIN labecommerce_products on labecommerce_products.id = product_id
    `)

    return result[0]
}

export const getUserPurchases = async (req: Request, res: Response):Promise<void> => {
    try {
        const user_id = req.params.user_id

        const usersPurchase = await userPurchases(user_id)

        res.status(201).send({usersPurchase: usersPurchase})
    } catch (error:any) {
        res.send({error, message:error.message})
    }
} 