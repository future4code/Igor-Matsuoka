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
    //Se eu adicionar a const idTask, tenho que passar elas pelo body
    //Nesse caso deixei o Date.now() gerando uma id aleatória
    // const idTask = Number(req.body.id)

    const newTask = req.body.title
    const isDone = req.body.completed
    const idUser = Number(req.headers.authorization)

    if(!req.body){
        res.status(400).send("It is missing a parameter!")
    }

    toDos.push({
        userId: idUser,
        id: Number(Date.now()),
        title: newTask,
        completed: isDone,
    })
    res.status(200).send({toDos})
})

//6
app.put("/changecompleted/:id", (req: Request, res:Response)=>{
    const taskId = Number(req.params.id)

    if(!req.body) {
        res.status(400).send("It is missing a parameter!")
    }

    for (let i = 0; i < toDos.length; i++) {
        if(toDos[i].id === taskId) {
            toDos[i].completed = !toDos[i].completed
        }
    }
    res.status(200).send({toDos})
})

//7
app.delete("/deletetask/:id", (req: Request, res:Response)=>{
    const taskId = Number(req.params.id)

    if(!req.body) {
        res.status(400).send("It is missing a parameter!")
    }

    for (let i = 0; i < toDos.length; i++) {
        if(toDos[i].id === taskId) {
            toDos.splice(i, 1)
        }
    }
    res.status(200).send({toDos})
})

//8
app.get("/usertasks/:userId", (req: Request, res:Response)=>{
    const idUser = Number(req.params.userId)

    if(!req.body){
        res.status(400).send("It is missing a parameter!")
    }
    const filterUser = toDos.filter((toDo)=>{
        return toDo.userId === idUser
    })
    const filterOthers = toDos.filter((toDo)=>{
        return toDo.userId !== idUser
    })
    res.status(200).send({
        todos:[{selectedUser:filterUser}, {others:filterOthers }]
    })
})


//https://documenter.getpostman.com/view/18386394/UVe9SVUc