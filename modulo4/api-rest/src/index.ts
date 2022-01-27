import express, {Response, Request} from "express";
import { users } from "./data";
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

//1a) O método a ser utilizado é o get
//1b) Indicaria como sendo o tipo de objeto que ela é, nesse caso: users

app.get('/users', (req:Request, res:Response)=>{
    try {
        res.status(200).send(users)
    } catch (error:any) {
        res.status(500).send(error.message)
    }
})