import express, {Request, Response} from "express";
import { productArray } from "./data";
import { AddressInfo } from "net";

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
        const search = req.query.product

        if(search){
            productArray.forEach((product) => {
            if(product.product === search){
                res.send(product)
            }
            })
        }

        if(productArray===undefined){
            res.status(422).send("There are no products")
        }

        res.status(200).send({productArray})
    } catch (error:any) {
        switch(error.message) {
            case "There are no products":
                res.statusCode = 400
                break
            default:
                res.statusCode = 500
        }

        res.send(error.message)

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
        //A validação por path params não vai funcionar porque ainda não foi ensinada (yuzo falou no plantão)
        const productId:any = req.params.id

        if(!productId){
            throw new Error("O produto informado não foi encontrado")
        }

        for(let i = 0; i < productArray.length; i++){
            if(productArray[i].id === productId){
              productArray.splice(i, 1)
            }
        }

        res.status(200).send({productArray})
    } catch (error:any) {
        switch(error.message) {
            case "O produto informado não foi encontrado":
                res.statusCode = 400
                break
            default:
                res.statusCode = 500
        }
        res.send(error.message)
    }
})
