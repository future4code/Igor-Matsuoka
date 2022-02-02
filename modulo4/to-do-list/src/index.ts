import express, { Express, Request, Response } from "express";
import cors from "cors";
import { connection } from "./connections";
import { AddressInfo } from "net";

const app: Express = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

//////////////////////////////////////// CRIAR USUÁRIO ////////////////////////////////////////
app.post("/user", async (req: Request, res: Response)=>{
    try{
        await connection("Actor")
        res.status(200).send({chaveDoRetorno: valorDaBusca});
    }catch(error){
        res.status(400).send({chaveDoErro: valorDoErro});
    }
 });