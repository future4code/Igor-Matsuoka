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

const message:string = "Olá AMIGÃO"

const sendNotifications = async (users:user[], message:string):Promise<void> =>{
    try {
        for (const user of users) {
            await axios.post('https://labenews.herokuapp.com/notifications', {
                subscriberId: user.id,
                message
            })
        }
        console.log("Notificações enviadas")
    } catch {
        console.log("ERRO")
    }
}

const main = async ():Promise<void> => {
    try {
        sendNotifications(users, message)
    } catch (error) {
        console.log("ERRO")
    }
}

main()