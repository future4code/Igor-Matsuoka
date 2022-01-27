import express, {Response, Request} from "express";
import { users, UserType } from "./data";
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

// app.get('/users', (req:Request, res:Response)=>{
//     try {
//         res.status(200).send(users)
//     } catch (error:any) {
//         res.status(500).send(error.message)
//     }
// })

//2a) Passei os parâmetros pelo query parameters pois get não aceita body!
// Porém tenho que commitar a requisição acima para a de baixo funcionar!
//2b) Fazendo validações dentro do try e utilizando enum para os users do data
// app.get('/users', (req:Request, res:Response)=>{
//     try {
//         const userType:UserType = req.query.type as UserType
//         const findType:any = users.filter((user)=>user.type === userType.toUpperCase())

//         // if(userType !== UserType.NORMAL || UserType.ADMIN ){
//         //     throw new Error ("The parameter is not valid")
//         // }

//         if(userType.toUpperCase() !== "NORMAL" && userType.toUpperCase() !== "ADMIN"){
//             throw new Error ("The parameter is not valid")
//         }

//         if(!userType){
//             throw new Error ("Type parameter is missing")
//         }
        
//         res.status(200).send(findType)
//     } catch (error:any) {
//         switch(error){
//             case "Type parameter is missing":
//                 res.statusCode = 400
//                 break
//             case "The parameter is not valid":
//                 res.statusCode = 400
//                 break
//             default:
//                 res.statusCode = 500
//         }
//         res.send(error.message)
//     }
// })

//3a) O parâmetro é o query parameter
//preciso commitar a requisição acima

// app.get('/users', (req:Request, res:Response)=>{
//     try {
//         const userName:string = req.query.name as string
//         const findName:any|undefined = users.filter((user)=>user.name.toLowerCase() === userName.toLocaleLowerCase())

//         if(!userName){
//             throw new Error ("Name parameter is missing")
//         }

//         if(findName.length === 0){
//             throw new Error ("Name is not found")
//         }

//         res.status(200).send(findName)
//     } catch (error:any) {
//         switch(error){
//             case "Name parameter is missing":
//                 res.statusCode = 400
//                 break
//             case "Name is not found":
//                 res.statusCode = 400
//                 break
//             default:
//                 res.statusCode = 500
//         }
//         res.send(error.message)
//     }
// })

//4)a) Retorna a mesma coisa
//b) O put é utilizado para atualizar parametros
// app.post('/createuser', (req:Request, res:Response)=>{
//     try {
//         const {id, name, email, type, age} = req.body

//         if(!id || !name || !email || !type || !age){
//             throw new Error ("Missing parameter")
//         }

//         for(let i=0; i<users.length; i++){
//             if(users[i].id === id || users[i].email === email){
//                 throw new Error ("Name or Id already exist")
//             }
//         }

//         if(typeof id !== 'number' || typeof name !== 'string' ||
//             typeof email  !== 'string' || type.toUpperCase() !== UserType.NORMAL &&  type.toUpperCase() !== UserType.ADMIN || 
//             typeof age  !== 'number'
//         ){
//             throw new Error ("Parameter is not valid")
//         }

//         users.push({
//             id,
//             name,
//             email,
//             type,
//             age
//         })

//         res.status(201).send(users)
        
//     } catch (error:any) {
//         switch(error){
//             case "Missing parameter":
//                 res.statusCode = 400
//                 break
//             case "Parameter is not valid":
//                 res.statusCode = 400
//                 break
//             default:
//                 res.statusCode = 500
//         }
//         res.send(error.message)
//     }
// })


