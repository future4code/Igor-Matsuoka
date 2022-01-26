import express, {Request, Response} from "express";
import { productArray } from "./data";
import { AddressInfo } from "net";
import { userInfo } from "os";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;

///////////////////////////////// TESTE /////////////////////////////////////////////////////////

app.get('/test', (req:Request, res:Response)=>{
    res.status(200).send("API FUNCIONANDO!")
})

/////////////////////////////////// CRIA PRODUTO ///////////////////////////////////////////////////////

app.post('/createcake', (req:Request, res:Response)=>{
    try {
        const { product, price } = req.body

        if(!product || !price) {
            throw new Error("Campos necessários para criar produto não informados")
        }

        if(typeof product !== 'string') {
            throw new Error("Nome do produto não é uma string")
        }

        if(typeof price !== 'number') {
            throw new Error("Preço não é um number")
        }

        if(price <= 0) {
            throw new Error("Preço não tem um valor válido")
        }

        productArray.push({
            id:Date.now().toString(),
            product,
            price
        })

        res.status(201).send({productArray})

    } catch (error:any) {
        switch(error.message) {
            case "Campos necessários para criar produto não informados":
              res.statusCode = 400
              break
            case "Nome do produto não é uma string":
                res.statusCode = 400
              break
            case "Preço não é um number":
                res.statusCode = 400
                break
            case "Preço não tem um valor válido":
                res.statusCode = 400
                break
            default:
                res.statusCode = 500
          }

          res.send(error.message)
    }
})

/////////////////////////////////////// RETORNA OS PRODUTOS ///////////////////////////////////////////////////

app.get('/cakes', (req:Request, res:Response)=>{
    try {
        res.status(200).send({productArray})
    } catch (error) {
        res.statusCode = 422
    }
})

//////////////////////////////////////////// ALTERA PREÇO ///////////////////////////////////////////////

app.put('/changeprice/:id', (req:Request, res:Response)=>{
    try {
        const { price } = req.body
        const productId:any = req.params.id

        if(!price){
            throw new Error("preço não informado!")
        }

        if(!productId){
            throw new Error("id não informado!")
        }

        if(productId <= 0){
            throw new Error("id não é válido")
        }

        if(typeof price !== 'number'){
            throw new Error("preço não é um number")
        }

        if(price <= 0){
            throw new Error("preço não é um número válido")
        }

        for(let i=0; i<productArray.length; i++){
            if(productId > productArray.length){
                throw new Error("O produto informado não foi encontrado")
            } else if (productArray[i].id===productId){
                productArray[i].price = price
            }
        }
    
        res.status(200).send({productArray})

    } catch (error:any) {
        switch(error.message) {
            case "preço não informado!":
                res.statusCode = 422
                break
            case "id não informado!":
                res.statusCode = 400
                break
            case "preço não é um number":
                res.statusCode = 409
                break
            case "preço não é um número válido":
                res.statusCode = 409
                break
            case "O produto informado não foi encontrado":
                res.statusCode = 409
                break
            case "id não é válido":
                res.statusCode = 409
                break
            default:
                res.statusCode = 500
          }

        res.send(error.message)
    }
})

//////////////////////////////////////////// DELETA PRODUTO ///////////////////////////////////////////////
app.delete('/deletecake/:id', (req:Request, res:Response)=>{
    try {
        const productId:any = req.params.id

        const remainingProducts = productArray.filter((product)=>{
            return product.id !== productId
        })

        res.status(200).send({remainingProducts})
    } catch (error) {
        res.statusCode = 422
    }
})
