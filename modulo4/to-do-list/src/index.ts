import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

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
        // .update({
        // name: req.body.name,
        // salary: req.body.salary,
        // birth_date: req.body.birthDate,
        // gender: req.body.gender
        // })
        // .where({ id: req.params.id })
        
        res.status(200).send({chaveDoRetorno: valorDaBusca});
    }catch(error){
        res.status(400).send({chaveDoErro: valorDoErro});
    }
 });