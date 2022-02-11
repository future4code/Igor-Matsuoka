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

//1a) O end point que devemos utilizar é o https://labenews.herokuapp.com/subscribers
//1b) Nós tipamos com Promise<any[]>
//1c)

async function getSubscribers(): Promise<any[]> {
    const response = await axios.get(`https://labenews.herokuapp.com/subscribers`);
    return response.data;
};

getSubscribers().then(console.log)


// Outro método de fazer
//Criar uma função auxiliar e invoca-la
// async function main(){
//     const result = await getSubscribers()
//     console.log(result)
// }

// main()

