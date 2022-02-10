import { Request, Response } from "express";
import { connection } from "../../data/connection"

export const registerPurchase = async (id:string, user_id:string, product_id:string, quantity:number, total_price:number):Promise<void> => {
    await connection("labecommerce_purchases")
        .insert({id: id, user_id: user_id, product_id:product_id, quantity:quantity, total_price:total_price})
        .into("labecommerce_purchases")
}

export const productPrice = async (id:string):Promise<any> => {
    const result = await connection("labecommerce_products")
        .select("price")
        .where("id", id)

    return result[0]
}

export const purchaseRegister = async (req: Request, res: Response):Promise<void> => {
    try {
        let errorCode = 400
        const {user_id, product_id} = req.body
        const quantity = Number(req.body.quantity)
        const id = Date.now().toString()
        let total_price:number = 0

        const price = await productPrice(product_id)

        if(price){
            total_price = price.price * quantity
        } else {
            errorCode = 422
            throw new Error("Há um problema ao requisitar o preço")
        }

        await registerPurchase(id, user_id, product_id, quantity, total_price)

        res.status(201).send({message: "Compra registrada com sucesso!"})
    } catch (error:any) {
        res.send({error, message:error.message})
    }
} 
