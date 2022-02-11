import express from "express";
import axios from "axios";
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

//2a) A diferença de sintaxe se da por transformar a função em uma const e utilizazr "=>"

//2b)
const getSubscribers = async ():Promise<any[]> => {
    const response = await axios.get(`https://labenews.herokuapp.com/subscribers`);
    return response.data
}

getSubscribers().then(console.log)