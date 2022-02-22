import { Request, Response } from "express";
import { connection } from "../../data/connection"

export const selectAllUsers = async ():Promise<any> => {

    const result = await connection.raw(`
        SELECT id, name, email from labecommerce_users
    `)
    return result[0]
}

export const selectPurchasesUsers = async(id:string): Promise<any> => {
    const result = await connection.raw(`
        SELECT labecommerce_purchases.id as purchase_id, product_id,  labecommerce_products.name as product_name,
        labecommerce_products.price, labecommerce_purchases.quantity, labecommerce_purchases.total_price 
        FROM labecommerce_purchases
        LEFT JOIN labecommerce_products ON labecommerce_products.id=product_id
        WHERE user_id = '${id}'
    `)
    return result[0]
}

export const usersPurchases = async(users:any): Promise<any> => {
    for(let i=0; i<users.length; i++){
        users[i].purchases = await selectPurchasesUsers(users[i].id)
    }
    return users
}

export const getUsers = async (req: Request, res: Response):Promise<void> => {
    try {
        
        const result = await selectAllUsers()
        .then (usersPurchases)

        res.send(result)
        
    } catch (error:any) {
        res.send({error, message:error.message})
    }
} 