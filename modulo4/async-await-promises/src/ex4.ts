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

//4a) Essa função terá uma tipagem Promise<void> pois não irá retornar nada, ele irá criar uma notícia
//4b)
type News = {
    title: string;
    content: string;
    date: number;
  };

const news:News = {
    title: "EVIDÊNCIAS",
    content: "E NESSA LOUCURA, DE DIZER QUE NÃO TE QUERO, VOU NEGANDO AS APARÊNCIAS, DISFARÇANDO AS EVIDÊNCIAS",
    date: Date.now()
}

const createNews = async(news:News):Promise<void> => {
    await axios.put(`https://labenews.herokuapp.com/news`, news);
}

const main = async ():Promise<void> => {
    try {
        createNews(news)
    } catch (error) {
        console.log("ERRO")
    }
}

main()