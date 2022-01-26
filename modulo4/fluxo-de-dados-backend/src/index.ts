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
    res.status(400).send("API FUNCIONANDO!")
})

/////////////////////////////////// CRIA PRODUTO ///////////////////////////////////////////////////////

app.post('/createcake', (req:Request, res:Response)=>{
    try {
        const { product, price } = req.body

        if(!product||!price){
            throw new Error("campos necessários para criar música não informados")
        }

        for (let i = 0; i < productArray.length; i++) {
            if (productArray[i].product === product) {
              throw new Error("produto já existe!")
            } 
        }

        productArray.push({
            id:Date.now().toString(),
            product,
            price
        })

        res.status(201).send({productArray})

    } catch (error:any) {
        switch(error.message) {
            case "campos necessários para criar música não informados":
              res.statusCode = 422
              break
            case "produto já existe!":
                res.statusCode = 409
              break
            default:
                res.statusCode = 500
          }
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

        for(let i=0; i<productArray.length; i++){
            if(!productId){
                if(productId > productArray.length){
                    throw new Error("O parâmetro informado não foi encontrado")
                }
                productArray[i].price = price
            }
        }

        res.status(200).send({productArray})

    } catch (error:any) {
        switch(error.message) {
            case "preço não informado!":
                res.statusCode = 422
              break
            case "O parâmetro informado não foi encontrado":
                res.statusCode = 409
              break
            default:
                res.statusCode = 500
          }
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
