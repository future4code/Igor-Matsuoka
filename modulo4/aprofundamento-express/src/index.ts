import express, {Request, Response} from "express";
import { toDos } from "./data";
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

//1
app.get("/ping", (req: Request, res:Response) => {          
    res.send("Pong! 🏓")
})

//4
app.get("/done", (req: Request, res:Response)=>{
    if(!req.body){
        res.status(400).send("It is missing a parameter!")
    }
    const filterDone = toDos.filter((toDo)=>{
        return toDo.completed === true
    })
    res.status(200).send(filterDone)
})

//5
app.post("/createtask", (req: Request, res:Response)=>{
    //Se eu adicionar as duas const abaixo, tenho que passar ela pelo body
    //Nesse caso deixei o Date.now() gerando uma id e userId aleatória
    // const userIdToAdd = Number(req.body.userId)
    // const idTask = Number(req.body.id)

    const newTask = req.body.title
    const isDone = req.body.completed

    if(!req.body){
        res.status(400).send("It is missing a parameter!")
    }
    toDos.push({
        userId: Number(Date.now()),
        id: Number(Date.now()),
        title: newTask,
        completed: isDone,
    })

    res.status(200).send({toDos})
})
