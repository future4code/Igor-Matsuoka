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

//6a) Esse método recebe um array de promises e retorna uma outra promise
//6b) permite executar várias operações assíncronas em paralelo e executar alguma operação (usando o then()) quando todas elas forem resolvidas.

//6c)
type user = {
	id: string;
	name: string;
	email: string;
}

const users:user[] = [
    {
        id: "4188567e-27c6-446c-8b4e-1bb1b92b6292",
        name: "Syrio Forel, o de Braavos",
        email: "syrio@labenu.com.br"
    }
]

const message:string = "FALA PARCEIRO"

const sendNotifications = async (users:user[], message:string):Promise<void> =>{
    try {
        const promises = users.map(user=>{
            return axios.post('https://labenews.herokuapp.com/notifications',{
                subscriberId: user.id,
                message: message
            })
        })
        await Promise.all(promises)
    } catch {
        console.log("ERRO")
    }
}

const main = async ():Promise<void> => {
    try {
        sendNotifications(users, message)
    } catch (error:any) {
        console.log(error.response?.data || error.message)
    }
}

main()