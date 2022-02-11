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


//3a) Não teremos erro no código pois o data está tipado como any
//3b) É indicado fazer isso pois abre possibilidade de retornar algo não relacionado ao usuário

type user = {
	id: string;
	name: string;
	email: string;
}

const getSubscribers = async ():Promise<user[]> => {
    const response = await axios.get(`https://labenews.herokuapp.com/subscribers`);
    return response.data.map((res:any)=>{
        return {
            id: res.id,
            name: res.name,
            email: res.email
        }
    })
}

getSubscribers().then(console.log)