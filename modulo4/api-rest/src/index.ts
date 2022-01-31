import express, {Response, Request} from "express";
import { users, UserType } from "./data";
import { AddressInfo } from "net";
import { idText } from "typescript";

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
//2a) Passei os parâmetros pelo query parameters pois get não aceita body!
// Porém tenho que commitar a requisição acima para a de baixo funcionar!
//2b) Fazendo validações dentro do try e utilizando enum para os users do data
//3a) O parâmetro é o query parameter

app.get('/users', (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const userType: UserType = req.query.type as UserType
    const userName: string = req.query.name as string

    if (!userName && !userType) {
      res.status(200).send(users)

    } else if (!userName && userType) {
      if (userType !== UserType.ADMIN && userType !== UserType.NORMAL) {
        errorCode = 422
        throw new Error('type parameter must be ADMIN or NORMAL.')
      }

      const usersByType = users.filter(user => user.type === userType)

      res.status(200).send(usersByType)

    } else if (userName && !userType) {
      const user: any | undefined = users.find(user => user.name === userName)
      if (!user) {
        errorCode = 404
        throw new Error('User not found.')
      }

      res.status(200).send(user)

    }
  } catch (error: any) {
    res.status(errorCode).send({message: error.message})
  }

})

//4)a) Retorna a mesma coisa
//b) O put é utilizado para atualizar parametros
app.post('/createuser', (req:Request, res:Response)=>{
    try {
        const {id, name, email, type, age} = req.body

        if(!id || !name || !email || !type || !age){
            throw new Error ("Missing parameter")
        }

        for(let i=0; i<users.length; i++){
            if(users[i].id === id || users[i].email === email){
                throw new Error ("Name or Id already exist")
            }
        }

        if(typeof id !== 'number' || typeof name !== 'string' ||
            typeof email  !== 'string' || type.toUpperCase() !== UserType.NORMAL &&  type.toUpperCase() !== UserType.ADMIN || 
            typeof age  !== 'number'
        ){
            throw new Error ("Parameter is not valid")
        }

        users.push({
            id,
            name,
            email,
            type,
            age
        })

        res.status(201).send(users)
        
    } catch (error:any) {
        switch(error){
            case "Missing parameter":
                res.statusCode = 400
                break
            case "Parameter is not valid":
                res.statusCode = 400
                break
            default:
                res.statusCode = 500
        }
        res.send(error.message)
    }
})

//5
app.put('/createuser/:id', (req:Request, res:Response)=>{
    try {
      const userId:any = req.params.id
      const newName = req.body.name

      for(let i=0; i<users.length; i++){
        if(users[i].id == userId){
          users[i].name = `${newName} - alterado`
        }
      }

      res.status(200).send(users)
    } catch (error:any) {
      res.send(error.message)
    }
})
//6
app.patch('/createuser/:id', (req:Request, res:Response)=>{
  try {
    const userId:any = req.params.id
    const newName = req.body.name

    for(let i=0; i<users.length; i++){
      if(users[i].id == userId){
        users[i].name = `${newName} - realterado`
      }
    }

    res.status(200).send(users)
  } catch (error:any) {
    res.send(error.message)
  }
})
//7
app.delete('/deleteuser/:id', (req:Request, res:Response)=>{
  try {
    const userId:any = Number(req.params.id)

    if(!req.body) {
      res.status(400).send("It is missing a parameter!")
  }

    for (let i = 0; i < users.length; i++) {
      if(users[i].id === userId) {
          users.splice(i, 1)
      }
    }
    res.status(200).send(users)

  } catch (error:any) {
    res.send(error.message)
  }
})


